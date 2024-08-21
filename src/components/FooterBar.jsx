// import React from 'react';
// import { FaInstagram } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { IoLogoWhatsapp } from "react-icons/io";

// import { FaLocationDot } from "react-icons/fa6";

// const FooterBar = () => {
//     return (

//         <footer className='footerSec'>

//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-4">


//                         <ul>
//                             <b>  get in touch</b>
//                             <li><a href="">    +012-345-6789</a></li>
//                             <li><a href="">   tealand@contact.com</a></li>
//                             <li><a href=""> 9889 lorem ipsum street, Pellentesque, CA, uSA</a></li>
//                         </ul>






//                     </div>
//                     <div className="col-lg-4  col-6">
//                         <b className='text-center'>  Senei Tea </b>

//                      <FaInstagram /> 
//                             <span className='footerIcon'> <FaTwitter /> </span>
//                             <span className='footerIcon'> <IoLogoWhatsapp /> </span>
//                             <span className='footerIcon'> <FaLocationDot /> </span>

//                     </div>
//                     <div className="col-lg-4  col-6">
//                         <p className='footerCopyRights'> &copy  copyrights 2024 SereniTea</p>
//                     </div>
//                 </div>

//             </div>

//         </footer>
//     )
// }

// export default FooterBar





import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function FooterBar() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>


      <section className='pt-2'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" />
                SereniTea Hills
              </h6>
              <p>
                Join us on a journey of flavor and relaxation, and experience the essence of true serenity with every sip.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='/shopnow' className='text-reset'>
                  Green Tea
                </a>
              </p>
              <p>
                <a href='/shopnow' className='text-reset'>
                  Black Tea
                </a>
              </p>
              <p>
                <a href='/shopnow' className='text-reset'>
                  Oolong Tea
                </a>
              </p>
              <p>
                <a href='/shopnow' className='text-reset'>
                  Herbal Tea
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='/shopnow' className='text-reset'>
                  Shop Now
                </a>
              </p>

              <p>
                <a href='/cart' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='/contact' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home "className='me-3' />
                Catherine falls road, Kotagiri-643217,The Nilgiris
              </p>
              <p>
                <MDBIcon icon="envelope" className='me-3' />
                sereniteahills@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className='me-3' /> + 91 9909787865
              </p>
              <p> 
                <MDBIcon icon="print" className='me-3' /> + 91 9909787856
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='#'>
          serenitea.com
        </a>
      </div>
    </MDBFooter>
  );
}