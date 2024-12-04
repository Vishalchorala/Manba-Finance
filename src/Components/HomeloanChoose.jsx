import React from "react";
import '../Stylesheet/HomeloanChoose.css';
import realEstate from "../Assets/real-estate 2.jpg";
import shopping from "../Assets/shopping 1.jpg";
import briefcase from "../Assets/briefcase 2.jpg";
import mortgage from "../Assets/mortgage 1.jpg";

const HomeloanChoose = () => {
    return (
        <>
            <div className="HomeloanChoose">
                <div className="container">
                    <h1>Reason to Choose us</h1>
                    <p className="choose-paragrapg">We offer award-winning, low-rate Home loans with no ongoing fees, saving our customers thousands of Rupee.</p>

                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="easyLowest">
                                <img src={realEstate} alt="real-estate" className="homeloansImg" />
                                <h3>Easy Loan Approvals</h3>
                                <p>
                                    Cum sociis natoque penatibus et nis dis parturgnis dis
                                    parturient montes, nascetur ridiculus mus..
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="easyLowest">
                                <img src={shopping} alt="real-estate" className="homeloansImg" />
                                <h3>Lowest Possible Prices</h3>
                                <p>
                                    One of the best ways to get a lower interest rate on your
                                    personal loan is to improve your credit score before applying
                                    for a loan.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="easyLowest">
                                <img src={briefcase} alt="real-estate" className="homeloansImg" />
                                <h3>Hassle free</h3>
                                <p>
                                    Suspendisse potenti. Nunc ut tellus iquam imperdiet lacus s aliquam felis tincidunt.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="easyLowest">
                                <img src={mortgage} alt="real-estate" className="homeloansImg" />
                                <h3>Secure Loan Processs</h3>
                                <p>
                                    Nulla ornare bibendum laoreteger tempus alesuada libero imperdie fermentum senc a ornare risus.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default HomeloanChoose;