
import React from "react";
import { Link } from "react-router-dom";

import BannerSectionTwo from "./BannerSectionTwo";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { GiShoppingCart } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";

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
                                    <p className="productName px-4  mb-0">{product.name}</p>

                                    <p className="productPrice text-center"><FaIndianRupeeSign />{product.price} / {product.grm}</p>
                                    <div className="d-flex justify-content-around align-items-center py-2">
                                        <button className="addToCartProd " onClick={() => addToCart(product)}>+</button>
                                        {cart.some((p) => p.id === product.id) && (
                                            <button className="addToCartProd " onClick={() => removeFromCart(product)}>-</button>

                                        )}
                                        <Link to='/Cart'> <button className="addToCartProd"> <GiShoppingCart /></button></Link>

                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}

                </div>

                <hr />

            </div>


        </>
    );
}

export default ShopCard;