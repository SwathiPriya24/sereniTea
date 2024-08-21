import React from 'react'
import aboutimg from "../images/aboutimg.png"
import { Link } from 'react-router-dom'

function AboutSection() {
    return (
        <>
            <section className='aboutUsSection'>
                <div className="container  px-0">


                    <h2 className='text-center'>About Us</h2>



                    <div className="row">
                        <div className="col-md-6"><img src="./images/aboutUsImg.jpg" alt="" className='img-fluid aboutUsImgLeft' /></div>






                        <div className="col-md-6 pt-3">
                            <div className="aboutUsCont">
                                <p>
                                    Among the many businesses of the SereniTea Hills Group, tea has been the primary and oldest one. Over the past 33 years, the company has been that of a progressive, quality-focused Niligiris tea producer.
                                </p>
                                <p>
                                    Our company has not only won the trust of its traders but also its consumers in regard to the superior quality of tea supplied. A key part of our success is our partnership with Anand Trading Co, which serves as a vital marketing partner, amplifying our reach and ensuring our premium tea is accessible to a wider market.
                                </p>



                                <Link to="/aboutus">
                                    <button className='btn-green'>
                                        Read More...
                                    </button></Link>

                                <br />

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutSection;