import React from "react";
import '../Stylesheet/HomeloanTools.css';
import discount from "../Assets/discount 1.png";
import hours from "../Assets/24-hours-support.png";
import wallet from "../Assets/wallet.png";
import credit from "../Assets/credit-card.png";

const HomeloanTools = () => {
    return (
        <>
            <div className="HomeloanTools">
                <div className="container">
                    <h4>TOOLS TO HELP YOU CHOOSE</h4>
                    <h1>Why borrow with MultiBank</h1>

                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-sm-12">
                            <div className="homeloanTools-Box">
                                <div className="imgContent">
                                    <img src={discount} alt="discount" width={80} />
                                </div>
                                <h4>Get interest rate discount</h4>
                                <p>
                                    In just 30 minutes, an experienced banker will help you
                                    get a .25% interest rate discount with an eligible
                                    checking and savings account.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-sm-12">
                            <div className="homeloanTools-Box">
                                <div className="imgContent">
                                    <img src={hours} alt="hours"  width={80} />
                                </div>
                                <h4> Exceptional service from specialists</h4>
                                <p>
                                    The most significant objective is to project gold loans as
                                    a 'Good Smart Option, as against being the Last Option'
                                    for seeking financial credit.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-sm-12">
                            <div className="homeloanTools-Box">
                                <div className="imgContent">
                                    <img src={wallet} alt="wallet"  width={80} />
                                </div>
                                <h4> Convenient payment options</h4>
                                <p>
                                    Make your payments quickly and easily through online and
                                    mobile banking, by phone or mail, with recurring automatic
                                    payments, or in a branch.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-sm-12">
                            <div className="homeloanTools-Box">
                                <div className="imgContent">
                                    <img src={credit} alt="credit"  width={80} />
                                </div>
                                <h4> Secure online & mobile banking</h4>
                                <p>

                                    Sign on for 24/7 account access to make payments, transfer
                                    money, check balances, and view your statements online.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};

export default HomeloanTools;