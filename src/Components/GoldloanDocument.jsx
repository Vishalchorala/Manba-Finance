import React from "react";
import '../Stylesheet/GoldloanDocument.css';
import Profile from "../Assets/profile.png";
import registeredDocument from "../Assets/registered-document.png";
import signature from "../Assets/signature.png";
import address from "../Assets/address.png";
import creditCards from "../Assets/credit-cards.png";
import identityCard from "../Assets/identity-card.png";

const GoldloanDocument = () => {
    return (
        <>
            <div className="goldLoanDocument">
                <div className="container">
                    <h1>
                        What are the documents required for
                        <span>Gold Loan?</span>
                    </h1>
                    <p>TOOLS TO HELP YOU CHOOSE</p>

                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="documentText">
                                <img src={Profile} alt="Profile" />
                                <h5>Passport sized photographs</h5>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="documentText">
                                <img src={registeredDocument} alt="registeredDocument" />
                                <h5>Application form</h5>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="documentText">
                                <img src={signature} alt="signature" />
                                <h5>Signature proof</h5>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="documentText">
                                <img src={address} alt="address" />
                                <h5>Address proof</h5>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="documentText">
                                <img src={creditCards} alt="creditCards" />
                                <h5> PAN card</h5>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="documentText">
                                <img src={identityCard} alt="identityCard" />
                                <h5>Identity proof</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};
export default GoldloanDocument;