import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css'; // Ensure to import your CSS for consistent styling

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        console.log('Login response:', data);

        if (response.ok) {
            localStorage.setItem('token', data.token);
            console.log('Token stored:', localStorage.getItem('token'));
            navigate('/add-workout');
        } else {
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
                <button type="submit">Log In</button>
                {error && <p className="error">{error}</p>}
            </form>
            <p>
                Don't have an account? <a href="/signup">Sign Up</a>
            </p>
        </div>
    );
};

export default Login;