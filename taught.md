# Day 31 & Day 32 — Taught Notes

---

## DAY 31 — GenAI Integration with Gemini API

### What was covered

#### 1. Introduction to Generative AI

- **Generative AI** refers to AI models that can generate new content (text, images, code, etc.) based on a prompt.
- **Gemini** is Google's family of large language models (LLMs).
- We integrate Gemini into a Node.js backend so our web apps can call it.

---

#### 2. Project Structure

```
Day31/
├── backend/
│   ├── index.js          ← Express server + Gemini API
│   ├── .env              ← Stores the API key (never commit this!)
│   └── package.json
└── GenAI/
    ├── index.html        ← Simple chat UI
    ├── script.js         ← Sends prompt to backend, renders response
    └── style.css
```

---

#### 3. Setting Up the Backend

**Install dependencies:**
```bash
npm install express cors dotenv @google/genai nodemon
```

**`.env` file:**
```
GEMINI_API_KEY=your_api_key_here
```

> Get your API key from: https://aistudio.google.com/app/apikey

**`index.js` — Core logic:**

```js
const express = require("express");
const cors = require("cors");
require('dotenv').config();
const { GoogleGenAI } = require("@google/genai");

const app = express();
app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

app.post("/generate", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
    });

    res.json({ output: response.text || "No response" });

  } catch (error) {
    res.status(500).json({ error: "Error generating content", details: error.message });
  }
});

app.listen(5000, () => {
  console.log("Gemini server running on http://localhost:5000");
});
```

**Key concepts:**
- `GoogleGenAI` is the SDK class — you pass your API key to it
- `.models.generateContent()` sends the prompt to the model and returns a response
- `response.text` extracts the plain text from the response object
- We use port `5000` (separate from the main backend on `8000`)

---

#### 4. Frontend (GenAI/script.js)

```js
const form = document.getElementById("form");
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const prompt = document.getElementById("prompt").value;

    const res = await fetch("http://localhost:5000/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt })
    });

    const data = await res.json();
    document.getElementById("output").innerText = data.output;
});
```

**Key concepts:**
- Simple form that takes user input (prompt)
- POSTs to the backend `/generate` endpoint
- Renders the AI output in a `<div>`

---

#### 5. Bonus: Python FastAPI + Image Generation (app.py)

This was shown as a reference for **image generation** using the FLUX model (requires GPU):

- `FastAPI` — Python equivalent of Express
- `diffusers` — HuggingFace library for diffusion models
- `pydantic` — Request body validation in Python
- The `/generate` endpoint generates an image, converts to base64, and returns it

> **Note:** The Python image generation requires a CUDA GPU and is not runnable on a regular laptop. It was shown to demonstrate AI image generation concepts.

---

#### 6. Key Takeaways — Day 31

| Concept | What you learned |
|---|---|
| Gemini API | How to call Google's LLM from a Node.js backend |
| `@google/genai` | The official Node.js SDK for Gemini |
| `.env` | Always store API keys in `.env`, never in code |
| `response.text` | How to extract text output from the Gemini response |
| CORS | Why we need it when frontend and backend are on different ports |
| Port 5000 | This AI server runs separately from your main app server |

---
---

## DAY 32 — Google OAuth with Passport.js

### What was covered

#### 1. Why OAuth?

- **Problem:** If you build your own login, you have to store passwords (security risk, hashing needed, forget password flows, etc.)
- **Solution:** Let Google (or GitHub, Facebook, etc.) handle authentication — they already verify the user's identity
- **OAuth 2.0** is the protocol that allows a third-party app to get limited access to a user's account
- **OpenID Connect (OIDC)** is built on top of OAuth 2.0 — specifically for *identity* (who are you?)

---

#### 2. How the Google OAuth Flow Works

```
User clicks "Sign in with Google"
        ↓
Frontend redirects to → backend /api/google
        ↓
Backend (Passport) redirects to → Google consent screen
        ↓
User approves → Google redirects to → backend /api/google/callback
        ↓
Passport verifies the user, creates/finds them in MongoDB
        ↓
Backend redirects to → frontend /home
        ↓
Frontend fetches user data from → backend /api/me (using session cookie)
```

---

#### 3. Google Cloud Console Setup

**Step 1:** Go to https://console.cloud.google.com/

**Step 2:** Create a new project (or select existing)

**Step 3:** Go to **APIs & Services → OAuth consent screen**
  - Choose "External"
  - Fill in App name, support email
  - Add scope: `email`, `profile`, `openid`

**Step 4:** Go to **APIs & Services → Credentials → Create Credentials → OAuth 2.0 Client ID**
  - Application type: **Web application**
  - Authorized redirect URIs: `http://localhost:8000/api/google/callback`

**Step 5:** Copy the **Client ID** and **Client Secret** into your `.env`:
```
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
```

---

#### 4. Backend Structure

```
Day32/backend/
├── server.js              ← Express + session + passport setup
├── config/db.js           ← MongoDB connection
├── models/user.model.js   ← User schema (stores Google profile)
├── passport/google.js     ← Google OAuth strategy
├── routes/user.auth.js    ← Auth routes (/api/google, /callback, /me, /logout)
├── .env                   ← PORT, MONGODB_URI, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET
└── package.json
```

---

#### 5. Installing Dependencies

```bash
npm install express cors dotenv express-session passport passport-google-oidc mongoose nodemon
```

| Package | Purpose |
|---|---|
| `express-session` | Stores the logged-in user in a session (server-side) |
| `passport` | Authentication middleware for Node.js |
| `passport-google-oidc` | Passport strategy for Google using OpenID Connect |
| `mongoose` | MongoDB ODM to save users to the database |

---

#### 6. User Model

```js
// models/user.model.js
const userSchema = new mongoose.Schema({
    name:     { type: String, required: true },
    googleId: { type: String, required: true },  // Google's unique ID
    email:    { type: String, required: true, unique: true },
    picture:  { type: String }                   // Profile photo URL
}, { timestamps: true });
```

> We store the `googleId` (not a password!) — this is what identifies returning Google users.

---

#### 7. Passport Strategy (passport/google.js)

```js
passport.use("google", new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:8000/api/google/callback',
    scope: ['profile', 'email']
}, async function verify(issuer, profile, done) {
    // Find existing user or create new one
    let user = await userModel.findOne({ googleId: profile.id });
    if (!user) {
        user = await userModel.create({
            name: profile.displayName,
            googleId: profile.id,
            email: profile.emails[0].value,
            picture: profile.photos?.[0].value ?? ""
        });
    }
    return done(null, user);
}));
```

**`serializeUser`** — What to store in the session (just the user's ID):
```js
passport.serializeUser((user, done) => {
    done(null, user.id);   // saves user.id to session
});
```

**`deserializeUser`** — On every request, look up the full user from the ID stored in session:
```js
passport.deserializeUser(async (id, done) => {
    const user = await userModel.findById(id);
    done(null, user);      // attaches user to req.user
});
```

---

#### 8. Server Setup (server.js)

**Critical order of middleware:**
```js
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

// 1. Session MUST come before passport
app.use(session({ secret: "someSecret", resave: false, saveUninitialized: false }));

// 2. Then passport
app.use(passport.initialize());
app.use(passport.session());
```

> `credentials: true` in CORS + `credentials: "include"` in frontend fetch = session cookie works cross-origin

---

#### 9. Routes (routes/user.auth.js)

```js
// Start Google login
GET /api/google  →  passport.authenticate("google")

// Google redirects here after user approves
GET /api/google/callback  →  passport.authenticate(...) → redirect to frontend /home

// Frontend fetches this after redirect to get user data
GET /api/me  →  if (req.isAuthenticated()) return req.user

// Logout - clears session
GET /api/logout  →  req.logout() → redirect to frontend /
```

---

#### 10. Frontend

**Login page (`/`)** — Just a button:
```jsx
const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8000/api/google/";
};
// <button onClick={handleGoogleLogin}>Sign in with Google</button>
```

**Home page (`/home`)** — Fetch user from session:
```jsx
useEffect(() => {
    fetch("http://localhost:8000/api/me", {
        credentials: "include"  // ← sends session cookie
    })
    .then(res => res.json())
    .then(data => setUser(data.user));
}, []);
```

> `credentials: "include"` is **critical** — without it, the browser won't send the session cookie to a different origin (localhost:8000 vs localhost:5173)

---

#### 11. Key Takeaways — Day 32

| Concept | What you learned |
|---|---|
| OAuth 2.0 | Protocol for delegating authentication to Google |
| Passport.js | Middleware that handles OAuth strategies in Express |
| `passport-google-oidc` | The specific strategy for Google OIDC login |
| `serializeUser` | What to save in the session (user ID) |
| `deserializeUser` | How to reconstruct the user from the session on each request |
| `express-session` | Stores session data server-side, sends cookie to browser |
| `req.isAuthenticated()` | Passport method to check if user is logged in |
| `req.user` | The currently logged-in user (set by deserializeUser) |
| CORS `credentials: true` | Required so session cookies work between ports |
| `fetch` + `credentials: "include"` | Required on frontend to send session cookie to backend |

---

#### 12. Common Mistakes to Avoid

1. **Session before Passport** — `app.use(session(...))` must come before `app.use(passport.initialize())`
2. **Forgetting `credentials: true`** in CORS — session cookie won't be sent
3. **Forgetting `credentials: "include"`** in frontend fetch — same problem
4. **Wrong redirect URI** — the Google Console redirect URI must exactly match `callbackURL` in your Passport config
5. **Wildcard CORS `origin: "*"`** with credentials — browsers block this; you must specify the exact origin
