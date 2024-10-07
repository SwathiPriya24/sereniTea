import React from 'react';
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import ggt from "../images/GINGTeanew.png"

const BannerSectionTwo = () => {
    return (
            <div class="inner-BannerCont">
                <div className="container">

                    <div className="row">
                        <div className="col-md-6 ">
                            <div className='text-start'>
                                <h1 className='mb-3'>OUR NEW PRODUCT </h1>
                                <div className="col-10 text-start"> 
                                     <h6> 
                                     "Ginger SereniTea" is a delightful infusion that combines the serene essence and the spice of ginger, creating a harmonious balance that soothes the senses and uplifts the spirit. <br /> Perfect for moments of relaxation or as a rejuvenating treat throughout the day.</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 pb-4 d-flex justify-content-center">
                            <img src={ggt} alt="" className='banertwo img-fluid' />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 text-center d-flex justify-content-center">
                            <span className="contacticon"><AiFillInstagram /> </span>
                            <span className="contacticon"><FaFacebookF /> </span>
                            <span className="contacticon"><FaTwitter /> </span>
                            <span className="contacticon"><IoLogoWhatsapp /></span>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default BannerSectionTwo;