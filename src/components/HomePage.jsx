
import React from 'react'
// import Header from './Header'
import AboutSection from './AboutSection'
import TeaManufactProcess from './TeaManufactProcess'
import OurTea from './OurTea'
import ShopNowHome from './ShopNowHome'
import BannerSectionOne from './BannerSectionOne'
import ContactUs from './ContactUs'
import OurOtherProducts from './OurOtherProducts'


const HomePage = () => {
    return (
        <div>

            <BannerSectionOne />

            <AboutSection />
            <TeaManufactProcess />
            <OurTea />

            <ShopNowHome />
            <OurOtherProducts />
            <ContactUs />



        </div>
    )
}

export default HomePage