import React, { useState } from 'react';
import { Form, Alert } from 'react-bootstrap';
import axios from 'axios';
import { IoArrowBackCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';

const CreateAccount = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        let tempErrors = {};
        let valid = true;

        if (!formData.username) {
            tempErrors.username = "Username is required.";
            valid = false;
        }
        if (!formData.email) {
            tempErrors.email = "Email is required.";
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Email is not valid.";
            valid = false;
        }
        if (!formData.password) {
            tempErrors.password = "Password is required.";
            valid = false;
        } else if (formData.password.length < 6) {
            tempErrors.password = "Password must be at least 6 characters.";
            valid = false;
        }

        setErrors(tempErrors);
        return valid;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            axios.post('http://localhost/serenitea/create_account.php', formData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(response => {
                    if (response.data.success) {
                        setMessage('Account created successfully!');
                        setSubmitted(true);
                        setFormData({ username: '', email: '', password: '' });
                    } else {
                        setMessage(response.data.error);
                        setSubmitted(false);
                    }
                })
                .catch(error => {
                    setMessage('An error occurred. Please try again.');
                    console.error('Error creating account:', error);
                    setSubmitted(false);
                });
        }
    };

    return (
        <section className="createAccountSec caccount">
            <div className="createacc container text-center pt-4">
                <div className='pb-4 d-flex justify-content-start align-items-center'> 
                <Link className='closeBtn' to='/login'> <IoArrowBackCircle /></Link>
                </div>
                <h2 className="cahead ">Create Account</h2>

                <div className=" pt-4 text-start p-3">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className='col'>
                            {submitted && <Alert variant="success">{message}</Alert>}
                            {message && !submitted && <Alert variant="danger">{message}</Alert>}
                        </div>
                        <div className='col-12'>
                            <Form onSubmit={handleSubmit} className="mb-3">
                                <Form.Group className="mb-3" controlId="username">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        isInvalid={!!errors.username}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        isInvalid={!!errors.email}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        isInvalid={!!errors.password}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                                </Form.Group>

                                <div className="btnCont d-flex justify-content-center">
                                    <button type="submit" className="cabutton">Create Account</button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreateAccount;
