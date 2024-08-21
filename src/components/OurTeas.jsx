import React from 'react'
import blacktea from '../images/black tea.png'
import greentea from '../images/green tea.png'
import whitetea from '../images/white tea.png'
import oolongtea from '../images/oolong tea.png'
import specialtea from '../images/special.png'
import herbaltea from '../images/hibiscusteap.png'
import ootyvarkey from '../images/varkey.jpg'
import homemade from '../images/chocolate.jpg'
import coffee from '../images/coffee 2.jpg'

const OurTeas = () => {
    return (
        <>
            <div className="container complete text-center">
                <h2 className='py-4 '>Our Teas</h2>
                <div>
                    <div className="row py-4 d-flex justify-content-center align-items-center">
                        <div className="col-4 col-sm-6 px-2">
                            <p><b>Black Tea</b>
                                <br />
                                Serenity Sunrise: A robust black tea blend to awaken your senses with each sunrise. It’s known for its strong flavor and dark color. It undergoes full oxidation during processing.</p>
                        </div>
                        <div className="col-4 col-sm-6">
                            <img src={blacktea} className='tea ' alt="" />
                        </div>
                    </div>

                    <div className="row py-4 d-flex justify-content-center align-items-center">
                        <div className="col-4 col-sm-6 px-2 ">
                            <p><b>Green Tea</b>
                                <br />
                                Emerald Breeze: Refresh and rejuvenate with the crispness of our green tea. Made from unoxidized leaves and appreciated for its fresh, vegetal taste. It's rich in antioxidants and often favored for its health benefits.        </p>
                        </div>
                        <div className="col-4 col-sm-6">
                            <img src={greentea} className='tea img-fluid' alt="" />
                        </div>
                    </div>

                    <div className="row py-4 d-flex justify-content-center align-items-center">
                        <div className="col-4 col-sm-6 px-2">
                            <p><b>White Tea</b>
                                <br />
                                Made from young and minimally processed leaves, resulting in a delicate flavor profile. It's known for its subtle taste and light color. </p>
                        </div>
                        <div className="col-4 col-sm-6">
                            <img src={whitetea} className='tea img-fluid' alt="" />
                        </div>
                    </div>

                    <div className="row py-4 d-flex justify-content-center align-items-center">
                        <div className="col-4 col-sm-6 px-2">
                            <p><b>Oolong Tea</b>
                                <br />
                                Partially oxidized, it falls between green and black tea in terms of flavor and color. Oolong teas can vary widely in taste, from floral to fruity to smoky.
                            </p>
                        </div>
                        <div className="col-4  col-sm-6">
                            <img src={oolongtea} className='tea img-fluid' alt="" />
                        </div>
                    </div>

                    <div className="row py-4 d-flex justify-content-center align-items-center">
                        <div className="col-4  col-sm-6 px-2">
                            <p><b> Special Blends</b>
                                <br />
                                <ul>
                                    <li><b>Serenity Spice Symphony (New) </b> : <br /> A harmonious fusion of spices and tea leaves, offering a sensory journey like no other.</li>
                                    <li><b>Soothing Chamomile </b>: <br /> Relax and unwind with the gentle embrace of chamomile-infused tea.</li>
                                </ul>
                            </p>
                        </div>
                        <div className="col-4 col-sm-6">
                            <img src={specialtea} className='tea img-fluid' alt="" />
                        </div>
                    </div>

                    <div className="row py-4 d-flex justify-content-center align-items-center">
                        <div className="col-4 col-sm-6 px-2">
                            <p><b> Herbal Infusions</b>
                                <br />
                                <ul>
                                    <li><b>Hibiscus Dream</b> : <br /> Sip serenity with each ruby-red brew, crafted to invigorate the senses and elevate your tea experience.</li>
                                    <li><b>Citrus Bliss</b>: <br /> Zesty and uplifting, this herbal infusion is a burst of sunshine in every cup.</li>
                                </ul>
                            </p>
                        </div>
                        <div className="col-4 col-sm-6">
                            <img src={herbaltea} className='tea img-fluid' alt="" />
                        </div>
                    </div>
                </div>
                <h2 className='py-4 '>Our Other Products</h2>
                <div>
                    <div className="row py-4 d-flex justify-content-center align-items-center">
                        <div className="col-4 col-sm-6 px-2">
                            <p><b>Ooty Varkey</b>
                                <br />
                                It  is a popular Indian snack originating from the hill station of Ooty. It's a type of crispy, crunchy biscuit that's loved for its unique taste and texture. These biscuits are often made with flour, sugar, ghee (clarified butter), and cardamom, giving them a deliciously aromatic flavor. They're usually thin and rectangular in shape, making them perfect for snacking or pairing with a hot cup of tea or coffee. </p>
                        </div>
                        <div className="col-4 col-sm-6">
                            <img src={ootyvarkey} className='otherproduct' alt="" />
                        </div>
                    </div>
                    <div className="row py-4 d-flex justify-content-center align-items-center">
                        <div className="col-4 col-sm-6 px-2">
                            <p><b>Homemade Chocolate</b>
                                <br />
                                It is a fun and delicious treat you can make yourself. You just melt cocoa butter, cocoa powder, and sweeteners together, then pour the mixture into molds to cool. You can add nuts, dried fruits, or spices for extra flavor. It's a versatile and rewarding experience, whether you're a beginner or an expert chocolatier.</p>
                        </div>
                        <div className="col-4 col-sm-6">
                            <img src={homemade} className='otherproduct' alt="" />
                        </div>
                    </div>
                    <div className="row py-4 d-flex justify-content-center align-items-center">
                        <div className="col-4 col-sm-6 px-2">
                            <p><b>Original Coffee</b>
                                <br />
                                STH is also home to Arabica coffee beans are by far the best type of coffee beans that one can buy. Our Varieties are far superior to that of Robusta and this is very apparent in the taste, which is smoother and less acidic than that of its relative. Our unique flavoured Coffee cherries are Hand picked and sun dried before they are sold in bulk.</p>
                        </div>
                        <div className="col-4 col-sm-6">
                            <img src={coffee} className='otherproduct' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurTeas