import React from 'react'
// import aboutusimg from '../images/aboutusimg2.png'
import aboutusimg from '../images/factory-bg.png'
import abtimgone from '../images/ourStry.jpg'
// import abtimgone from '../images/abtimg1.png'
const AboutUs = () => {
    return (
        <>
            <section className='aboutUs'>
                <div className="container-fluid">
                    {/* <h2 className='abtpgimg'>ABOUT US</h2> */}
                    <div className="abtpgimg"></div>
                </div>
                <div className='container'>


                    <div className="row py-3">
                        <h2 className='text-center mb-0'>Welcome to SereniTea Hills, <br />
                        </h2>
                        <b>
                            <p className='text-center'>Where the artistry of tea meets the tranquility of nature.</p></b>

                    </div>

                    <div className="row">
                        <div className="col-md-6 d-flex justify-content-center">
                            <img src={aboutusimg} className='img-fluid' alt="" />
                        </div>

                        <div className="col-md-6 pt-4">
                            <p> At SereniTea Hills, we believe that every cup of tea tells a story-a story of meticulous craftsmanship, of natural purity, and of serene moments shared. Our journey began with a passion for tea, ignited by the serene landscapes and rich cultural heritage of tea-growing regions around the world.
                            </p>

                            <p>  SereniTea Hills is beautifully carpeted over the Nilgiris and over time has earned a niche for itself in the tea industry. SereniTea Hills has wooed connoisseurs of tea and is eagerly sought after at auction centers -both for domestic sales and the overseas market. Direct exports to form part of the STH portfolio.</p>

                        </div>
                    </div>

                    <div className="row py-4">
                        <h3 className='text-center'>Our Story</h3>
                        <div className="col-md-6 order-md-2 text-start">

                            <ul className='tea-products'>
                                <li>  Over a period of years the company has modernized the factories which has resulted in increased tea production. Both the factories manufacture high quality High Grown Orthodox Black and Specialty Teas and Welbeck produces certified Organic and Green Teas.

                                </li>
                                <li>   Our mission goes beyond delivering exceptional teas; it's about fostering moments of tranquility and mindfulness in your daily life. Whether you're seeking a comforting brew to start your morning, a refreshing iced tea for a sunny afternoon, or a soothing blend to unwind in the evening, Serenity Hills offers a curated selection to suit every palate and occasion. <br />
                                </li>
                                <li>   Rooted in sustainability and ethical sourcing, we work closely with tea growers who share our values, ensuring that each cup supports responsible farming practices and enriches the communities that cultivate our teas. <br />
                                </li>
                                <li>    Savor the moment. Embrace serenity. Welcome to Serenity Hills.</li>

                            </ul>







                        </div>
                        <div className="col-md-6 order-md-1 d-flex justify-content-center align-items-center ">
                            <img src={abtimgone} alt=""  className='img-fluid'/>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col">
                            <div className=''>
                                <h3>Quality at Serenity Hills</h3>


                                <ul>
                                    <li>At Serenity Hills, quality is paramount in everything we do. We are dedicated to sourcing the finest tea leaves from around the world, selecting only those that meet our stringent standards for flavor, aroma, and freshness.</li>
                                    <li>Our teas undergo rigorous quality control processes at every stage of production, from cultivation to packaging. We prioritize sustainability and ethical sourcing practices, ensuring that each cup of Serenity Hills tea delights the senses and upholds our commitment to environmental stewardship.</li>
                                    <li>Our goal is to provide you with teas that consistently exceed expectations, embodying the essence of purity and excellence.</li>
                                </ul>
                         
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">

                                <h3>Eco-Friendly Packaging at Serenity Hills:</h3>

                                <ul>
    <li>At Serenity Hills, we are committed to sustainability and reducing our environmental footprint.</li>
    <li>Our eco-friendly packaging initiatives reflect our dedication to preserving the environment while delivering exceptional quality teas.</li>
    <li>Every cup of tea at Serenity Hills is not only a moment of serenity but also a step towards a greener future.</li>
    <li>Join us in enjoying tea responsibly, knowing that your choice supports sustainable practices and environmental stewardship.</li>
</ul>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs