import React from "react";
import style from '../Stylesheet/HomeCashLoan.module.css';
import CashLaonImg from '../Assets/cashloanleftimg.png';
import { Link } from "react-router-dom";

const HomeCashLoan = () => {
    return (
        <>
            <section className={style.HomeCashLoan}>
                <div className="container">
                    <div className="row">
                        <div className={`col-xl-6 col-lg-12 ${style.leftContent}`}>
                            <img src={CashLaonImg} alt="CashLoan-Image" width={"100%"} />
                        </div>
                        <div className={`col-xl-6 col-lg-12 ${style.rightContent}`}>
                            <h3>Do you need a small cash loan?</h3>
                            <span>We’ll provide you with anythig between  ₹1,00,000 and ₹50L !</span>

                            <p>
                                If you're facing an unexpected financial expense, such as a medical emergency, car repair, or home repair, you may be considering taking out a small cash loan. Small cash loans are typically unsecured loans, which means you don't need to put up any collateral to get them. They can be a good option for people with less-than-perfect credit or who need money quickly.
                            </p>
                            <Link to='/contact' className="btn">Apply Now</Link>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
export default HomeCashLoan