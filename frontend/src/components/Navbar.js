// src/components/Navbar.js
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Import CSS for Navbar styling

const Navbar = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const email = token ? JSON.parse(atob(token.split('.')[1])).email : null;

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <header className="navbar">
            <div className="container">
                <Link to="/">
                    <h1>Workout Buddy</h1>
                </Link>
                <nav>
                    <ul>
                        {email ? (
                            <>
                                <li>{email}</li>
                                <li>
                                    <button className="nav-button" onClick={handleLogout}>Logout</button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link to="/login">
                                        <button className="nav-button">Login</button>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/signup">
                                        <button className="nav-button">Sign Up</button>
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;