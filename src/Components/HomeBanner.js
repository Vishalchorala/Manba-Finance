import React from "react";
import '../Stylesheet/HomeBanner.css';
import { Link } from "react-router-dom";
import '../Assets/Homeloansimg.png'

const HomeBanner = () => {
    return (
        <>
            <header className="homeBanner">
                <div className="container">
                    <h2>Bring Your Aspirations To Life,<span className="frame"><br />Home Loan</span></h2>
                    <p>Welcome to Manba Finance, where you can find a loan <br />solutioncustomised for your needs.</p>
                    <div className="mt-5">
                        <Link to="/contact" className="home-ApplyBtn">Apply Now</Link>
                    </div>
                </div>
            </header>
        </>
    )
};

export default HomeBanner;  