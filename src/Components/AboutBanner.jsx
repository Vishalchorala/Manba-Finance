import React from "react";
import { Link } from "react-router-dom";
import '../Stylesheet/AboutBanner.css';

const AboutBanner = () => {
    return (
        <>
            <div className="aboutBanner">
                <div className="container">
                    <h1>
                        <Link to="/">Home &#62;</Link> About
                    </h1>
                </div>
            </div>
        </>
    )
};

export default AboutBanner;