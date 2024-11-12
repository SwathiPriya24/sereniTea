import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState('');
    const navigate = useNavigate();

    const validateForm = () => {
        let formErrors = {};
        let isValid = true;

        if (!username.trim()) {
            formErrors.username = 'Username is required';
            isValid = false;
        }

        if (!password.trim()) {
            formErrors.password = 'Password is required';
            isValid = false;
        }

        setErrors(formErrors);
        return isValid;
    };

    const handleLogin = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        // Local check for username and password
        if (username === 'swathi' && password === '1234') {
            localStorage.setItem('isAdminAuthenticated', true);
            navigate('/admin'); // Redirect to User List page on successful login
        } else {
            setServerError('Invalid credentials');
        }
    };

    return (
        <div className="adminlogin">
            <div className="login-container mb-4">
                <h2 className="adminhead text-center">Admin Login</h2>
                <div>
                    <form onSubmit={handleLogin}>
                        <label>Username:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}

                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}

                        <div className="py-4 d-flex justify-content-center align-items-center">
                            <button className="submitBtn" type="submit">Login</button>
                        </div>

                        {serverError && <p style={{ color: 'red' }}>{serverError}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
