import React from "react";
import style from '../Stylesheet/HomeProvide.module.css';
import Economy from '../Assets/economy 1.png';
import Investment from '../Assets/invesment 1.png';
import Agreement from '../Assets/agreement 1.png';
import Continue from '../Assets/continuous 1.png';

const HomeProvide = () => {
    return (
        <>
            <section className={style.HomeProvide}>
                <div className="container">
                    <div className="row">
                        <div className={`col-lg-6 col-md-6 col-sm-12 ${style.HomeProvideText}`}>
                            <img src={Economy} alt="Economy" />
                            <p>Embark on your loan journey, understanding the right loan type – personal for flexibility or business for expansion. Prepare with documentation and a strong application, focusing on credit score improvement</p>
                        </div>
                        <div className={`col-lg-6 col-md-6 col-sm-12 ${style.HomeProvideText}`}>
                            <img src={Investment} alt="Economy" />
                            <p>Unlock major investment potential with loans as a financial powerhouse, elevating your financial aspirations. Join us as we explore this gateway to seizing big opportunities and realizing your financial dreams</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className={`col-lg-6 col-md-6 col-sm-12 ${style.HomeProvideText}`}>
                            <img src={Agreement} alt="Economy" />
                            <p>Businesses often seek loans for expansion, whether opening new locations, boosting production, or diversifying products. Loans provide vital capital for growth</p>
                        </div>
                        <div className={`col-lg-6 col-md-6 col-sm-12 ${style.HomeProvideText}`}>
                            <img src={Continue} alt="Economy" />
                            <p>In today's dynamic financial landscape, gain essential insights for managing money, investments, and securing your financial future with our expert financial content.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default HomeProvide;