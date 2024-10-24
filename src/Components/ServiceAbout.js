import React from "react";
import style from '../Stylesheet/ServiceAbout.module.css';
import { Link } from "react-router-dom";
import backpersonalLoan from "../Assets/backpersonalLoanimg.png";
import backgoldloan from "../Assets/backgoldLoanimg.png";
import backhomeloan from "../Assets/backhomeloanimg.png";

const ServiceAbout = () => {
    return (
        <>

            <div className={style.ServiceAbout}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                            <div className={`${style.flipBox}`}>
                                <div className={style.flipBack}>
                                    <div>
                                        <img src={backpersonalLoan} height={60} alt="personalLoan" />
                                    </div>
                                    <h4> Personal Loan</h4>
                                    <p>
                                        Get Personal Loan Based On Your Credit Profile- From 1 Lakh
                                        To 15 Lakh.
                                    </p>
                                    <Link to="/personalLoan">FIND OUT MORE</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                            <div className={`${style.flipBox}`}>
                                <div className={style.flipBack}>
                                    <div>
                                        <img src={backgoldloan} height={60} alt="goldloan" />
                                    </div>
                                    <h4> Gold Loan</h4>
                                    <p style={{ fontSize: '15px' }}>
                                        The most significant objective is to project gold loans as a
                                        'Good Smart Option, as against being the Last Option' for
                                        seeking financial credit.
                                    </p>
                                    <Link to="/goldloan">FIND OUT MORE</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                            <div className={`${style.flipBox}`}>
                                <div className={style.flipBack}>
                                    <div>
                                        <img src={backhomeloan} height={60} alt="homeloan" />
                                    </div>
                                    <h4> Home Loan</h4>
                                    <p>
                                        Various insurers in India & buy insurance policy online. Get
                                        instant quotes & save huge on premiums.
                                    </p>
                                    <Link to="/homeLoan">FIND OUT MORE</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ServiceAbout;