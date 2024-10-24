import React from "react";
import '../Stylesheet/BusinessloanFactor.css';

import moneybag from "../Assets/money-bag (1) 1.png";
import analsis from "../Assets/analysis 1.png";
import annual from "../Assets/Nature.png";
import businesscredit from "../Assets/business-credit-score 1.png";
import profit from "../Assets/profit 1.png";
import briecase from "../Assets/Loan Amount.png";
import img from "../Assets/money (1) 2.png";
import img2 from "../Assets/Annual Turnover.png";

const BusinessloanFactor = () => {
    return (
        <>
            <div className="businessLoanFactor">
                <div className="container">
                    <h1>
                        Factor that Affect
                        <span>  Business Loan <br />
                            Interest Rate
                        </span>
                    </h1>

                    <div className="row mt-4">
                        <div className="col-lg-6 col-md-12">
                            <div className="factorContent">
                                <img src={moneybag} alt="moneybag" className="imgg" />
                                <h5>Financial Health of Business</h5>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="factorContent">
                                <img src={profit} alt="profit" className="imgg" />
                                <h5>Profitability & Stability</h5>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="factorContent">
                                <img src={annual} alt="annual" className="imgg" />
                                <h5>Nature of Business</h5>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="factorContent">
                                <img src={briecase} alt="briecase" className="imgg" />
                                <h5>CIBIL Score & Credit History</h5>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="factorContent">
                                <img src={analsis} alt="analsis" className="imgg" />
                                <h5>Business Plan</h5>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="factorContent">
                                <img src={img} alt="img" className="imgg" />
                                <h5>Loan Amount & Repayment Tenure</h5>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="factorContent">
                                <img src={businesscredit} alt="businesscredit" className="imgg" />
                                <h5>Collateral</h5>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="factorContent">
                                <img src={img2} alt="img2" className="imgg" />
                                <h5>Annual Turnover</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
};

export default BusinessloanFactor;