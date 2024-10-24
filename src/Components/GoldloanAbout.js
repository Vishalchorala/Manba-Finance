import React from "react";
import '../Stylesheet/GoldloanAbout.css';
import EasyLoanApprovals from "../Assets/Easy Loan Approvals.png";
import LowestPossiblePrices from "../Assets/Lowest Possible Prices.png";
import Hasslefree from "../Assets/Hassle free.png";
import SecureLoanProcesss from "../Assets/Secure Loan Processs.png";

const GoldloanAbout = () => {
    return (
        <>
            <div className="goldLoanAbout">
                <div className="container">
                    <h1> Reason to Choose <span>gold loan</span> </h1>
                    <p className="goldLoanPara"> We offer award-winning, low-rate gold loans with no ongoing
                        fees,saving our customers thousands of rupee.</p>

                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="goldLoanContent">
                                <img src={EasyLoanApprovals} alt="Easy Loan Approvals" />
                                <h3>Easy Loan Approvals</h3>
                                <p>
                                    At Easy Loan Approvals, we understand that time is of the essence when you need financial assistance. Our user-friendly online application process takes only minutes to complete.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="goldLoanContent">
                                <img src={LowestPossiblePrices} alt="Lowest Possible Prices" />
                                <h3>Lowest Possible Prices</h3>
                                <p>We work tirelessly to secure exclusive discounts and promotions for our users. Our team scours the web for the latest deals, coupons, and limited-time offers, so you don't have to. Saving money has never been easier.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="goldLoanContent">
                                <img src={Hasslefree} alt="Hassle free" />
                                <h3>Hassle free</h3>
                                <p>
                                    We firmly believe that financial assistance should not discriminate based on income. Whether you earn a high salary or have a more modest income, everyone deserves the opportunity to secure a loan when needed. Hassle-Free Loans welcomes applicants from all income brackets.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="goldLoanContent">
                                <img src={SecureLoanProcesss} alt="Secure Loan Processs" />
                                <h3>Secure Loan Processs</h3>
                                <p>To prevent identity theft and fraud, we employ rigorous identity verification procedures. Our process verifies that you are who you claim to be, providing an added layer of security to your loan application.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default GoldloanAbout;