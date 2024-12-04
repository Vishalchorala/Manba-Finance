import React from "react";
import style from '../Stylesheet/ServiceLoans.module.css';
import serviceimg from "../Assets/serviceaboutimg.png";

const ServiceLoans = () => {
    return (
        <>
            <div className={style.ServiceLoan}>
                <div className="container">
                    <div className={style.imgContent}>
                        <div className={style.ServiceImg}>
                            <img src={serviceimg} alt="Loans Description" />
                        </div>
                        <h3>MORE INFO</h3>
                        <div className={style.personalLoan}>
                            <h4>Personal Loan</h4>
                            <p>A big Part of financial freedom le having your heart and mind free from worry about the whatifs of life.</p>
                        </div>
                        <div className={style.businessLoan}>
                            <h4>Business Loan</h4>
                            <p>Get Unsecured Business Loan For Business Expansion And Working Capital From 5 Lakh To 5 Cr</p>
                        </div>
                        <div className={style.goldLoan}>
                            <h4>Gold Loan</h4>
                            <p>One can pay back the loan of gold, but one dies forever in debt to those who are kind.</p>
                        </div>
                        <div className={style.homeLoan}>
                            <h4>HomeLoan</h4>
                            <p>Owning a home is the most desirable thing for all. it acts as your fiscal wealth and mental security.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};

export default ServiceLoans;