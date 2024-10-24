import React from "react";
import style from '../Stylesheet/HomeSuccess.module.css';
import Finance from '../Assets/finance 1.png';
import Team from '../Assets/team 1.png';
import Verified from '../Assets/verified 1.png';
import Medal from '../Assets/medal 1.png';

const HomeSuccess = () => {
    return (
        <>
            <div className={style.HomeSuccess}>
                <div className="container">
                    <div className="row">
                        <div className={`col-xl-3 col-lg-6 col-md-6 ${style.HomeSuccessText}`}>
                            <img src={Finance} alt="Successful Loan Approval" />
                            <span>2179</span>
                            <p>Seccessful Loan Approval</p>
                        </div>
                        <div className={`col-xl-3 col-lg-6 col-md-6 ${style.HomeSuccessText}`}>
                            <img src={Team} alt="Customer Satifaction" />
                            <span>99%</span>
                            <p>Customer Satifaction</p>
                        </div>
                        <div className={`col-xl-3 col-lg-6 col-md-6 ${style.HomeSuccessText}`}>
                            <img src={Verified} alt="Verified Bank" />
                            <span>70+</span>
                            <p>Bank / NBFC's</p>
                        </div>
                        <div className={`col-xl-3 col-lg-6 col-md-6 ${style.HomeSuccessText}`}>
                            <img src={Medal} alt="Award Winner" />
                            <span>5+</span>
                            <p>Award Winner</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default HomeSuccess;