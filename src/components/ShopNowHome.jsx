import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import bteaimg from '../images/Black-Tea-.webp';
import gteaimg from '../images/Greentea.png';
import lteaimg from '../images/Lemon tea.jpg';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdCurrencyRupee } from "react-icons/md";
import { IoMdArrowForward } from "react-icons/io";
import { MdDoubleArrow } from "react-icons/md";

const products = [
    { id: 1, img: bteaimg, title: 'Black Tea 120', grm: '100gm' },
    { id: 2, img: gteaimg, title: 'Green Tea 120', grm: '100gm' },
    { id: 3, img: lteaimg, title: 'Citrus Bliss 120', grm: '100gm' },
    { id: 4, img: lteaimg, title: 'Citrus Bliss 120', grm: '100gm' }
];

const ShopNowHome = () => {
    return (
        <>
            <section className='shopNowSec'>
                <div className="container text-center py-4">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-8">
                            <div>
                                <h2>SHOP NOW</h2>
                                <p>Discover our exquisite selection of teas, carefully
                                    curated to bring tranquility and delight to your day. Order online and
                                    enjoy the finest blends delivered straight to your doorstep. Embrace
                                    the serene experience of premium tea with every sip. </p>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                    <div className="row">
                            <div className="col-12 text-end"> <p className='showmorebtn mb-0   text-end'><Link to="/shopnow">Show More Products <IoIosArrowRoundForward /></Link>
                            </p></div>
                        </div>
                        <div className="row">
                            {products.map(product => (
                                <div key={product.id} className="col-xl-3 col-lg-4 col-sm-6 d-flex justify-content-center">
                                    <Card className='blackteaht m-2' style={{ width: '18rem' }}>
                                    {/* <Card className='blackteaht m-2'> */}
                                        <img  src={product.img} alt="" className='img-fluid'  />
         
                                        <Card.Body>
                                            <p className='mb-0 productPrice'>{product.title}<MdCurrencyRupee /> / {product.grm} </p>
                                        </Card.Body>
                                    </Card>
                                </div>
                            ))}
                        </div>
                     
                    </div>

                </div>

            </section>
        </>
    );
}

export default ShopNowHome;
