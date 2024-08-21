import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        let tempErrors = {};
        let valid = true;

        if (!formData.name) {
            tempErrors.name = "Name is required.";
            valid = false;
        }
        if (!formData.email) {
            tempErrors.email = "Email is required.";
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Email is not valid.";
            valid = false;
        }
        if (!formData.mobile) {
            tempErrors.mobile = "Mobile number is required.";
            valid = false;
        } else if (!/^\d{10}$/.test(formData.mobile)) { 
            tempErrors.mobile = "Mobile number is not valid.";
            valid = false;
        }
        if (!formData.message) {
            tempErrors.message = "Message is required.";
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

            axios.post('http://localhost/sereniTea/contactForm.php', formData, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
                .then(response => {
                    setSubmitted(true);
                    alert('Form submitted successfully');
                })
                .catch(error => {
                    console.error('There was an error submitting the form!', error);
                });
        }
    };

    const getInputStyle = (field) => {
        if (!formData[field]) return null;
        return errors[field] ? { borderColor: 'red' } : { borderColor: 'green' };
    };

    return (
        <section className="contactUsSec">
            <div className="container text-center py-4 sectionsix">
                <h2>CONTACT</h2>
                <div className="row py-4 text-start p-3">
                    <div className="col-lg-6 order-lg-2">
                        {submitted && <Alert variant="success">Form submitted successfully!</Alert>}
                        <Form onSubmit={handleSubmit} className='mb-3'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    // placeholder="Ex: Gopal Ram. KGR"
                                    value={formData.name}
                                    onChange={handleChange}
                                    isInvalid={!!errors.name}
                                    style={getInputStyle('name')}
                                />
                                <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    // placeholder="Ex: gopal@gmail.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    isInvalid={!!errors.email}
                                    style={getInputStyle('email')}
                                />
                                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control
                                    type="tel"
                                    name="mobile"
                                    // placeholder="Ex: 7895432438"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    isInvalid={!!errors.mobile}
                                    style={getInputStyle('mobile')}
                                />
                                <Form.Control.Feedback type="invalid">{errors.mobile}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    isInvalid={!!errors.message}
                                    style={getInputStyle('message')}
                                />
                                <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                            </Form.Group>
                            <div className="btnCont d-flex justify-content-center">   
                                       <button type="submit" className='submitBtn'>Submit </button>
                            </div>
                        </Form>
                        
                    </div>
                    <div className="col-lg-6 order-lg-1">
                        <iframe
                            src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15643.214918983113!2d76.85142774021585!3d11.42178725318197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8c02f379bca31%3A0xf7b63bc2a4ce6aab!2sKotagiri%2C%20Tamil%20Nadu%20643217!5e0!3m2!1sen!2sin!4v1723445928808!5m2!1sen!2sin"
                            width="100%"
                            height={650}
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                <div className="row">
                    <p className='text-primaryClr'>Stay connected with Serenity Hills Tea on social media for updates, offers, and more.</p>
                    <div className="col-12 text-center d-flex justify-content-center">
                        <span className="contacticon"><AiFillInstagram /> </span>
                        <span className="contacticon"><FaFacebookF /> </span>
                        <span className="contacticon"><FaTwitter /> </span>
                        <span className="contacticon"><IoLogoWhatsapp /></span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;
