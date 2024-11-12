import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const CheckoutPage = () => {
    const location = useLocation();
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [amount, setAmount] = useState(location.state?.amount || ''); 

    const handlePayment = () => {
        if (cardNumber && expiryDate && cvv && amount) {
            console.log('Processing payment');
        } else {
            alert('Please fill in all the details');
        }
    };

    return (
        <>
            <div className='paymentPage'>


                <div className="checkout-page mb-5">
                    <h2>Payment</h2>
                    <form>
                        <div>
                            <label>Card Number:</label>
                            <input
                                type="text"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                                placeholder="Enter your card number"
                            />
                        </div>
                        <div>
                            <label>Expiry Date:</label>
                            <input
                                type="text"
                                value={expiryDate}
                                onChange={(e) => setExpiryDate(e.target.value)}
                                placeholder="MM/YY"
                            />
                        </div>
                        <div>
                            <label>CVV:</label>
                            <input
                                type="password"
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value)}
                                placeholder="Enter CVV"
                            />
                        </div>
                        <div>
                            <label>Amount:</label>
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="Total Amount"
                                disabled // Disable the input to prevent modification
                            />
                        </div>
                        <button type="button" onClick={handlePayment}>
                            Pay Now
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CheckoutPage;
