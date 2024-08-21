import React from 'react'
import AddtoCart from './AddtoCart'
import blacktea from '../images/Black-Tea-.webp'

const CheckoutPage = () => {
    return (
        <>
            <div className="container text-center py-4 px-0">
                <h2>Your Cart</h2>
                <div className="row d-flex justify-content-center align-items-center flex-wrap-wrap">
                    <div className="col">
                        <h2>Product</h2>
                        <div>
                            <img className='checkimg' src={blacktea} alt="" />
                            <h5>Black Tea 500g-290Rs</h5>
                        </div>
                    </div>
                    <div className="col">
                        <h2>Quantity</h2>
                        <div><AddtoCart/></div>
                    </div>
                    <div className="col">
                        <h2>Total</h2>

                    </div>                </div>





            </div>
        </>
    )
}

export default CheckoutPage