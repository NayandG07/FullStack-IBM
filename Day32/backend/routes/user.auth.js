const express = require("express");
const passport = require("passport");
const userRouter = express.Router();

userRouter.get("/api/google", passport.authenticate("google", { scope: ["profile", "email"] }));

userRouter.get(
  "/api/google/callback",
  passport.authenticate("google", { failureRedirect: "http://localhost:5173/" }),
  (req, res) => {
    res.redirect("http://localhost:5173/home");
  }
);

// Returns current logged-in user from session
userRouter.get("/api/me", (req, res) => {
    if (req.isAuthenticated()) {
        res.json({ user: req.user });
    } else {
        res.status(401).json({ message: "Not authenticated" });
    }
});

// Logout route
userRouter.get("/api/logout", (req, res) => {
    req.logout((err) => {
        if (err) return res.status(500).json({ message: "Logout failed" });
        res.redirect("http://localhost:5173/");
    });
});


module.exports = {
    userRouter
}
