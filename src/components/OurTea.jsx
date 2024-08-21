import React from 'react';
import whitetea from "../images/white tea.png";
import greentea from "../images/green tea.png";
import oolongtea from '../images/oolong tea.png';
import blacktea from '../images/black tea.png';
import herbaltea from '../images/hibiscusteap.png';
import specialtea from '../images/special.png';


const OurTea = () => {
    return (
        <>
            <section className='OurTeas'>
                <div className="container text-center ">
                    <h2>Our Teas</h2>

                    <div className="teatop row d-flex justify-content-center align-items-center py-4">
                        <div className="col-md-3 col-6  tea p-4">
                            <img src={whitetea} alt="White Tea" className="img-fluid tea-img" />
                            <h5 className='teatextht'>White Tea</h5>
                        </div>
                        <div className="col-md-3 col-6  tea p-4">
                            <img src={greentea} alt="Green Tea" className="img-fluid tea-img" />
                            <h5 className='teatextht'>Green Tea</h5>
                        </div>
                        <div className="col-md-3 col-6 tea p-4">
                            <img src={oolongtea} alt="Oolong Tea" className="img-fluid tea-img" />
                            <h5 className='teatextht' >Oolong Tea</h5>
                        </div>
                        <div className="col-md-3 col-6  tea p-4">
                            <img src={blacktea} alt="Black Tea" className="img-fluid tea-img" />
                            <h5 className='teatextht'>Black Tea</h5>
                        </div>
                    </div>

                    <div className="teadown row d-flex justify-content-center">
                        <div className="col-md-3 col-6  tea p-4">
                            <img src={herbaltea} alt="Herbal Tea" className="img-fluid tea-img" />
                            <h5 className='teatextht'>Herbal Tea</h5>
                        </div>
                        <div className="col-md-3 col-6  tea p-4">
                            <img src={specialtea} alt="Special Tea" className="img-fluid tea-img" />
                            <h5 className='teatextht'>Special Tea</h5>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default OurTea;
