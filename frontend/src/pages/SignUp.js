// src/pages/SignUp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css'; // Import common styles for authentication

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const response = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            navigate('/login'); // Redirect to login after successful sign-up
        } else {
            const data = await response.json();
            setError(data.error || 'Something went wrong');
        }
    };

    return (
        <div className="auth-container">
            <h2>Welcome to Workout Buddy!</h2>
            <form onSubmit={handleSubmit} className="auth-form">
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Sign Up</button>
                {error && <p className="error">{error}</p>}
            </form>
            <p>
                Already have an account? <a href="/login">Log In</a>
            </p>
        </div>
    );
};

export default SignUp;