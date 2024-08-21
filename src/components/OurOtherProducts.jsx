
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import chocimg from '../images/chocolatehd.png';
import varkeyimg from '../images/varkeyooty.png';
import coffeeimg from '../images/coffeepowder.png';
const OurOtherProducts = () => {
    return (
        <>
            <section className='ourProducts'>
                <div className="container ">
                    <h2>OUR OTHER PRODUCTS</h2>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">

                                <div className="otherProductsSection">

                                    <ul className="productList">
                                        <li>
                                            <strong>Ooty Varkey:</strong>
                                            <p>Experience the rich flavor of Ooty's finest traditional snacks. Our Ooty Varukey is made using age-old recipes, offering a crunchy and savory delight that transports you straight to the picturesque hills of Ooty.</p>
                                        </li>
                                        <li>
                                            <strong>Coffee:</strong>
                                            <p>Savor the aroma and taste of our premium, freshly roasted coffee beans. Sourced from the best plantations, our coffee ensures a robust and invigorating brew that coffee lovers will cherish with every sip.</p>
                                        </li>
                                        <li>
                                            <strong>Home Made Chocolate:</strong>
                                            <p>Indulge in our delicious, handcrafted chocolates made with love and the finest ingredients. Each bite offers a perfect balance of sweetness and rich cocoa, making it a treat for chocolate enthusiasts of all ages.</p>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col-md-6">
                                <div className="container pt-4 px-0">
                                    <Carousel
                                        autoPlay={true}
                                        interval={3000}
                                        stopOnHover={false}
                                        infiniteLoop={true}
                                    >
                                        <div className='changeht'>
                                            <img src={varkeyimg} alt="slide 1" className=' carousalimg img-fluid' />
                                            {/* <button className="legend"> <Link to="/ourteas">Homemade Chocolate</Link> </button> */}
                                        </div>
                                        <div className='changeht'>
                                            <img src={coffeeimg} alt="slide 2" className='img-fluid' />
                                            {/* <button className="legend"> <Link to="/ourteas">Ooty Varkey</Link> </button> */}
                                        </div>
                                        <div className='changeht'>
                                            <img src={chocimg} alt="slide 3" className='img-fluid' />

                                            {/* <button className="legend"> <Link to="/ourteas">   Original Coffee</Link> </button> */}
                                        </div>
                                    </Carousel>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurOtherProducts;











