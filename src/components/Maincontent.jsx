import React, { useState } from 'react'
import SectionSix from './SectionSix'
import FooterBar from './FooterBar'
import Login from './Login'
import NavPage from './NavPage'
import HomePage from './HomePage'
import { Routes, Route } from 'react-router-dom'
import OurTeas from './OurTeas'
import AboutUs from './AboutUs'
import Cart from './Cart'
import ShopCard from './ShopCard'
import Blogs from './Blogs'
import ForgotPasswordForm from './ForgotPasswordForm';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import ContactUs from './ContactUs.jsx';
import bt from "../images/Black-Tea-.webp";
import gt from "../images/Greentea.png";
import wt from "../images/WTEA.jpg";
import ot from "../images/oolong tea.webp";
import ct from "../images/cardamom-tea.webp";
import cht from "../images/chamomile-tea.webp";
import ht from "../images/hibiscusteaaa.jpeg";
import cot from "../images/chocolatehd.png";

const Maincontent = () => {


    const [cart, setCart] = useState([]);

    const [initialProducts, setInitialCart] = useState([
        { id: 1, name: "Black Tea ", grm: '100gm', price: 145, quantity: 0, img:  bt },
        { id: 2, name: "Black Tea ", grm: '250gm', price: 290, quantity: 0, img: bt },
        { id: 3, name: "Black Tea ", grm: '500gm', price: 580, quantity: 0, img: bt },
        { id: 4, name: "Green Tea ", grm: '100gm', price: 190, quantity: 0, img:  gt  },
        { id: 5, name: "Green Tea ", grm: '250gm', price: 380, quantity: 0, img: gt },
        { id: 6, name: "Green Tea ", grm: '500gm', price: 760, quantity: 0, img: gt },
        { id: 7, name: "White Tea ", grm: '100gm', price: 780, quantity: 0, img: wt},
        { id: 8, name: "White Tea ", grm: '250gm', price: 1560, quantity: 0, img: wt },
        { id: 9, name: "Oolong Tea ", grm: '100gm', price: 780, quantity: 0, img:ot},
        { id: 10, name: "Oolong Tea ", grm: '500gm', price: 1560, quantity: 0, img: ot },
        { id: 11, name: "Serenity Spice Symphony ", grm: '100gm', price: 780, quantity: 0, img: ct },
        { id: 12, name: "Serenity Spice Symphony ", grm: '500gm', price: 1560, quantity: 0, img: ct },

        { id: 13, name: "Soothing Chamomile ", grm: '100gm', price: 1560, quantity: 0, img: cht },
        { id: 14, name: "Soothing Chamomile ", grm: '500gm', price: 1560, quantity: 0, img: cht },
        { id: 15, name: "Hibiscus Dream ", grm: '100gm', price: 780, quantity: 0, img: ht },
        { id: 16, name: "Hibiscus Dream ", grm: '500gm', price: 1560, quantity: 0, img: ht },
        { id: 19, name: "Homemade chocolate ", grm: '100gm', price: 750, quantity: 0, img: cot },
        { id: 20, name: "Homemade chocolate ", grm: '500gm', price: 750, quantity: 0, img: cot },


    ]);

    const addToCart = (product) => {
        const updatedCart = [...cart];
        const updatedQuantity = [...initialProducts];


        const updatedQuantityIndex = updatedQuantity.findIndex((p) => p.id === product.id);

        const existingProductIndex = updatedCart.findIndex((p) => p.id === product.id);

        if (updatedQuantityIndex !== -1) {
            updatedQuantity[updatedQuantityIndex].quantity += 1;

        } else {
            updatedQuantity.push({ ...product });
        }

        if (existingProductIndex !== -1) {
            updatedCart[existingProductIndex].quantity += 1;
            updatedCart[existingProductIndex].totalPrice += product.price;
        } else {
            updatedCart.push({ ...product, quantity: 1, totalPrice: product.price });
        }

        setCart(updatedCart);
        setInitialCart(updatedQuantity);
    };

    const removeFromCart = (product) => {
        const updatedCart = [...cart];
        const updatedQuantity = [...initialProducts];
        const updatedQuantityIndex = updatedQuantity.findIndex((p) => p.id === product.id);
        const existingProductIndex = updatedCart.findIndex((p) => p.id === product.id);

        if (updatedQuantityIndex !== -1) {
            updatedQuantity[updatedQuantityIndex].quantity -= 1;

        } else {
            updatedQuantity.push({ ...product });
        }
        if (existingProductIndex !== -1) {
            updatedCart[existingProductIndex].quantity -= 1;
            updatedCart[existingProductIndex].totalPrice -= product.price;

            if (updatedCart[existingProductIndex].quantity <= 0) {
                updatedCart.splice(existingProductIndex, 1);
            }
        }

        setCart(updatedCart);
        setInitialCart(updatedQuantity);
    };

    const calculateTotalPrice = () => {
        return cart.reduce((total, product) => total + product.totalPrice, 0);
    };


    return (
        <>

            <NavPage />

            <Routes>
                 <Route path='/' element={< HomePage />}/>
                 <Route path='/sereniTea' element={< HomePage />}/>
                <Route path="shopnow" element={
                    <ShopCard
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}


                        cart={cart} initialProducts={initialProducts}
                    />}
                />
                <Route path="/cart" element={
                    <Cart
                        cart={cart}
                        calculateTotalPrice={calculateTotalPrice} removeFromCart={removeFromCart}
                    />}
                />

                <Route path='/Login' element={<Login />}></Route>
                <Route path='/aboutus' element={<AboutUs />}></Route>
                <Route path='/ourteas' element={<OurTeas />}></Route>
                <Route path='/contact' element={<ContactUs />}></Route>
                <Route path='/blog' element={<Blogs />}></Route>
                <Route path='/forgot-password' element={<ForgotPasswordForm />}></Route>

            </Routes>
            <FooterBar />

        </>
    )
}

export default Maincontent;