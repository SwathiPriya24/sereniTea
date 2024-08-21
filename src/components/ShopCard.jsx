
import React from "react";
import { Link } from "react-router-dom";

import BannerSectionTwo from "./BannerSectionTwo";
import { FaShoppingCart } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa6";
import { GiShoppingCart } from "react-icons/gi";
function ShopCard({ addToCart, cart, removeFromCart, initialProducts }) {

    return (
        <>


            <BannerSectionTwo />

            <div className="container px-0">
                <div className="row g-3">
                    {initialProducts.map((product) => (
                        <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
                            <div className="productCardOuter">
                                <div className="prodCardImg">
                                    <img src={product.img} alt="" className="img-fluid" />
                                </div>
                                <div className="prodCont text-center">
                                    <p className="productName  mb-0">{product.name}</p>
                                    <p className="productPrice text-center"><FaIndianRupeeSign />{product.price} / {product.grm}</p>
                                    {/* <button className="addToCartProd">Add To Cart <GiShoppingCart /></button> */}
                                    <div className="d-flex justify-content-around align-items-center py-2">
                                        <button className="addToCartProd " onClick={() => addToCart(product)}>+</button>
                                        {cart.some((p) => p.id === product.id) && (
                                            <button className="addToCartProd " onClick={() => removeFromCart(product)}>-</button>

                                        )}
                                        <Link to='/Cart'> <button className="addToCartProd"> <GiShoppingCart /></button></Link>

                                    </div>
                                    {/* <div className="d-flex justify-content-center align-items-center">
                                        <Link to='/Cart'> <button className="addToCartProd"> <GiShoppingCart /></button></Link>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* {initialProducts.map((product) => (
                        <div key={product.id} className="col-lg-4 col-sm-6 mb-4 text-center">
                            <div className="card">
                                <div className="card-body">
                                    <img src={product.img} alt="" className="productImgCard" />
                                    <h5 className="card-title py-2">{product.name}</h5>
                                    <div className="d-flex justify-content-center align-items-center ">
                                        <h5 className="card-text">Rs {product.price}</h5>
                                        <h5 className="card-text ms-4 ">Quantity: {product.quantity}</h5>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center pt-2">
                                        <button className="btn btn-primary mr-2" onClick={() => addToCart(product)}>Add</button>
                                        {cart.some((p) => p.id === product.id) && (
                                            <button className="btn btn-danger" onClick={() => removeFromCart(product)}>Remove</button>
                                        )}
                                        <Link to='/Cart'> <button className="btn ms-2"> <FaShoppingCart /></button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))} */}
                </div>

                <hr />

            </div>


        </>
    );
}

export default ShopCard;