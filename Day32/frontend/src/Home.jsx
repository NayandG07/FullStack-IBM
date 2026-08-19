import { useEffect, useState } from 'react'
import './App.css'

function Home() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8000/api/me", {
            credentials: "include"   // needed to send session cookie
        })
            .then(res => res.json())
            .then(data => {
                if (data.user) setUser(data.user);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    const handleLogout = () => {
        window.location.href = "http://localhost:8000/api/logout";
    }

    if (loading) return <p>Loading...</p>;

    if (!user) return (
        <div>
            <p>Session expired or not authenticated.</p>
            <a href="/">Go back to login</a>
        </div>
    );

    return (
        <div className="profile-card">
            {user.picture && (
                <img src={user.picture} alt="Profile" className="avatar" />
            )}
            <h2>Welcome, {user.name}!</h2>
            <p>{user.email}</p>
            <button onClick={handleLogout} className="logout-btn">
                Logout
            </button>
        </div>
    )
}

export default Home
