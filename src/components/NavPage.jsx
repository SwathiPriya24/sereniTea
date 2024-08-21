import React, { useState } from 'react';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserCircle } from "react-icons/fa";
import { CgMenuLeftAlt } from "react-icons/cg";
import { Link } from 'react-router-dom'
import { RiShoppingBag4Line } from "react-icons/ri";



export default function NavPage() {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <header>

            <div className="topOfferBar">
                Offer  Citrus Bliss Green Tea | Use "TEA20" & Get FLAT 20% OFF
            </div>

            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid className='py-2'>
                    <Navbar.Brand href="#">
                        <Link to='/'> LOGO</Link>
                    </Navbar.Brand>
                    <span className="d-flex navCartLeft">
                        <Nav.Link href="#action1" className='cart d-flex align-items-center'>
                            <Link to="/Cart"> <RiShoppingBag4Line /> </Link>
                        </Nav.Link>
                        <Nav.Link href="#action1" className='cart d-flex align-items-center'>
                            <Link to='/login'> <FaUserCircle /></Link>
                        </Nav.Link>
                        <Navbar.Toggle>
                            <CgMenuLeftAlt />
                        </Navbar.Toggle>
                    </span>

                    <Navbar.Collapse id="navbarScroll">

                        <Nav className="me-auto my-2 my-lg-0 navBarCenter" navbarScroll>
                            <Nav.Link href="#action1">
                                <Link to='/home'>  Home</Link>
                            </Nav.Link>
                          
                            <Nav.Link href="#action2">
                                <Link to='/aboutus'> About Us</Link> </Nav.Link>
                                <Nav.Link href="#action2">
                                <Link to='/shopnow'>  Shop Now</Link>
                            </Nav.Link>
                            <Nav.Link href="#action2">
                                <Link to='/blog'> Blogs</Link></Nav.Link>
                         
                        </Nav>
                        <span className="d-flex navCartRight">
                            <Nav.Link href="#action1" className='cart'>
                                <Link to="/Cart">
                                    <RiShoppingBag4Line style={{ height: '100%', width: 'auto' }} />
                                </Link>
                            </Nav.Link>
                            <Nav.Link href="#action1" className='cart'>
                                <Link to='/login'> <FaUserCircle style={{ height: '100%', width: 'auto' }} /></Link>
                            </Nav.Link>

                            <Navbar.Toggle aria-controls="navbarScroll" />
                        </span>

                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </header >
    );
}