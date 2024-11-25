import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
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

    const handleLogin = async (e) => {
        e.preventDefault();
    
        if (!validateForm()) return;
    
        try {
            const response = await fetch('http://localhost/serenitea/login.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }), // Check this line
            });
            const data = await response.json();
    
            if (data.success) {
                localStorage.setItem('isAdminAuthenticated', true);
                navigate('/shopnow');  
            } else {
                setServerError(data.error || 'Invalid credentials');
            }
        } catch (error) {
            setServerError('An error occurred. Please try again.');
        }
    };
    

    return (
        <div className="loginpage">
            <div className="login-container mb-4">
                <h2 className="adminhead text-center">Login</h2>
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

                    <div className="text-center pt-4">
                        <Link className="text-center logintxta" to="/createaccount">Don't have an account ? Sign Up</Link>
                    </div>

                    <div className="py-4 d-flex justify-content-center align-items-center">
                        <button className="submitBtn" type="submit">Login</button>
                    </div>

                    {serverError && <p style={{ color: 'red' }}>{serverError}</p>}
                </form>
            </div>
        </div>
    );
};

export default Login;
