import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Accordion from 'react-bootstrap/Accordion';


const CheckoutPage = () => {
    return (
        <>
            <div className="container pt-5">
                <h2 className='checkpage pt-5'>Choose Payment Method</h2>
                <div className="py-3 row">
                    <div className=" pay col-2">
                        <h6 className='py-2 checkpagee'>Payment Options</h6>

                        <button className='paynow'> UPI <MdKeyboardDoubleArrowRight /> </button>
                        <br />
                        <button className='payment'> Credit / Debit Card <MdKeyboardDoubleArrowRight /> </button>
                        <br />
                        <button className='payment'> Net Banking <MdKeyboardDoubleArrowRight /> </button>
                        <br />
                        <button className='payment'> Gift Card<MdKeyboardDoubleArrowRight /> </button>
                        <br />
                        <button className='payment'> EMI <MdKeyboardDoubleArrowRight /> </button>
                        <br />
                        <button className='payment'> Cash on Delivery <MdKeyboardDoubleArrowRight /> </button>
                    </div>
                    <div className="col-6">
                        <h4 className='checkpagee'>Pay with UPI</h4>
                        <div >
                            <div className='ms-5 py-4'><select className='payoption d-flex justify-content-center' name="upi" id="">
                                <option value=""> Google pay </option>
                                <option value=""> Phone Pe </option>
                                <option value=""> Paytm </option>
                                <option value=""> Other UPI </option>
                            </select>
                            </div>
                            <input className='ms-5' type="text " placeholder='Enter UPI ID '></input>
                            <input className='ms-5' type="text" placeholder='Enter Phone Number'></input>

                            <div className='pt-4 d-flex justify-content-center align-items-center'> <button className='paynow'>Pay Now</button></div>

                        </div>
                    </div>
                    <div className="col-4">
                        <div>

                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Bag</Accordion.Header>
                                    <Accordion.Body>
                                        Black Tea 500gm
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Deliver to</Accordion.Header>
                                    <Accordion.Body>
                                        Address
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Price Details</Accordion.Header>
                                    <Accordion.Body>
                                        Cart
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <div className='px-2'><p>Buy authentic products. Pay securely. <br />
                                Easy returns and exchange</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckoutPage;