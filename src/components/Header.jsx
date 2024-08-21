import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = () => {
    return (
        <>

            <section className='welcomeSec'>
                <div className="container">


                    <div className="row d-flex justify-content-center">

                        <div className="col-12 text-center">

                            <h1> Welcome to Sereni Tea Hills </h1>

                        </div>
                        <div className="col-10 text-center">  <p> Discover the finest teas, handpicked from lush hills, and delivered to your doorstep. Indulge in a serene tea experience with every sip. Enjoy the perfect blend of flavor and tranquility from SereniTea Hills.</p>
                        </div>

                    </div>


                </div>
            </section>
        </>
    )
}

export default Header