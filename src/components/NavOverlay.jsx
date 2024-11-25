import React from 'react';
// import { FaCartArrowDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import {FaUserCircle}from 'react-icons/fa';
// import {IoLockClosed}from 'react-icons/fa';
// import {  FaWindowClose }from 'react-icons/fa';


const NavOverlay = ({ show, toggleOverlay }) => {
    return (
        <div className={`overlay ${show ? 'show' : ''}`} onClick={toggleOverlay}>
            <div className="overlay-content">
                <Link to="/adminlogin" onClick={toggleOverlay}>
                    <IoLockClosed style={{ width: 'auto', height: '100%' }} />
                    Admin Login
                </Link>
                <Link to="/Cart" onClick={toggleOverlay}>
                    <FaCartArrowDown style={{ width: 'auto', height: '100%' }} />
                    Cart
                </Link>
                <Link to="/login" onClick={toggleOverlay}>
                    <FaUserCircle style={{ width: 'auto', height: '100%' }} />
                    User Login
                </Link>
                <Link to="/" onClick={toggleOverlay}>
                    <FaWindowClose style={{ width: 'auto', height: '100%' }} />
                    Close
                </Link>
            </div>
        </div>
    );
};

export default NavOverlay;
