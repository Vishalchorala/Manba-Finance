import React from "react";
import '../Stylesheet/ContactTools.css';
import building from "../Assets/office-building 1(2).jpg";
import phone from "../Assets/old-typical-phone 1.jpg";
import emaill from "../Assets/email 2.jpg";

const ContactTools = () => {
    return (
        <>
            <div className="container">
                <div className="contactTools">
                    <h2>We are here to help you</h2>
                    <p>
                        Various versions have evolved over the years sometimes by accident
                        sometimes on purpose injected humour and the like.
                    </p>

                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                            <div className="contactTools-Boxes">
                                <img src={building} alt="building" />
                                <h3>BRANCH OFFICE</h3>
                                <p>312, super diamond market, surat</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                            <div className="contactTools-Boxes">
                                <img src={phone} alt="phone" />
                                <h3>CALL US AT</h3>
                                <p>+91 22 6212 5000</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                            <div className="contactTools-Boxes">
                                <img src={emaill} alt="email" />
                                <h3>EMAIL ADDRESS</h3>
                                <p>Manbafinaserve@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ContactTools;