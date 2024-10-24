import React from "react";
import style from '../Stylesheet/ServiceBanner.module.css';
import { Link } from "react-router-dom";

const ServiceBanner = () => {
    return (
        <>
            <div className={style.ServiceBanner}>
                <div className="container">
                    <h4>
                        <Link to="/">Home &#62; </Link>Service
                    </h4>
                    <h1>Our <span> Services</span> </h1>
                    <p>
                        Our dedicated customer support team is here to assist you at every stage of your loan journey. Whether you have questions about the application process or need advice on the right loan for your situation, we're just a call or message away.
                    </p>
                    <Link to="/contact" className={`${style.applyBtn}`}>
                        Apply Now
                    </Link>
                </div>
            </div>

        </>
    )
};

export default ServiceBanner;