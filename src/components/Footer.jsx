import React from 'react'
import footerimg from '../images/footimg.png'

const Footer = () => {
    return (
        <>
            <div className="container text-center py-4 footer">
                <h2>CERTIFIED BY</h2>
                <div className="  row py-4">
                    <div className="col md-6 rightfooter text-start">
                        <h4>Quick Links</h4>
                        <ul>
                            <li>Search </li>
                            <li>Contact</li>
                            <li>Our Teas</li>
                            <li>Return and Exchange Policy</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>

                    </div>
                    <div className="col md-6  leftfooter text-start">

                        <h4>Subscribe to our Emails</h4>
                        <input type="text" placeholder='Email' />
                        <button className='submitbtn '>Submit</button>
                        <br />
                    </div>
                    {/* <img src={footerimg} className=' footerimg' alt="" /> */}
                </div>

            </div>
        </>
    )
}

export default Footer;