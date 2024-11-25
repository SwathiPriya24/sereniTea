import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserCircle } from "react-icons/fa";
import { CgMenuLeftAlt } from "react-icons/cg";
import { Link } from 'react-router-dom';
import logot from "../images/logotea.png"
import { IoLockClosed } from "react-icons/io5";
import { FaWindowClose } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";

export default function NavPage() {

    return (
        <header>

            <div className="topOfferBar">
                Offer  Citrus Bliss Tea | Use "TEA20" & Get FLAT 20% OFF
            </div>

            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid className='py-2'>
                    <Navbar.Brand href="#">
                        <Link to='/'> <img className='logot' src={logot} alt="" /> </Link>
                    </Navbar.Brand>
                    <span className="d-flex navCartLeft">
                        <Nav.Link href="#action1" className='cart d-flex align-items-center'>
                            <Link to="/Cart"> <FaCartArrowDown /> </Link>
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
                                <Link to='/'>  Home</Link>
                            </Nav.Link>

                            <Nav.Link href="#action1">
                                <Link to='/aboutus'> About Us</Link> </Nav.Link>
                            <Nav.Link href="#action2">
                                <Link to='/shopnow'>  Shop Now</Link>
                            </Nav.Link>
                            <Nav.Link href="#action3">
                                <Link to='/blog'> Blogs</Link></Nav.Link>

                        </Nav>
                        <span className="d-flex navCartRight">
                            <Nav.Link href="#action1" className='cart'>
                                <Link to="/adminlogin"> <IoLockClosed  className='adminstyle' style={{ height: '100%', width: 'auto' }} /> 
                                </Link>
                            </Nav.Link>

                            <Nav.Link href="#action2" className='cart'>
                                <Link to="/Cart">
                                    <FaCartArrowDown className='adminstyle' style={{ height: '100%', width: 'auto' }} />
                                </Link>
                            </Nav.Link>
                            <Nav.Link href="#action3" className='cart'>
                                <Link to='/login'> <FaUserCircle className='adminstyle' style={{ height: '100%', width: 'auto' }} /></Link>
                            </Nav.Link>
                            <Nav.Link href="#action4" className='cart'>
                                <Link to="/"> <FaWindowClose className='adminstyle' style={{ height: '100%', width: 'auto' }} />
                                </Link>
                            </Nav.Link>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                        </span>

                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </header >
    );
}