import React from "react";
import style from '../Stylesheet/Footer.module.css';
import footerLogo from '../Assets/logo.png';
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { FaAngleRight, FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";



const Footer = () => {
    return (
        <>
            <footer className={style.footer}>
                <div className="container">
                    <div className={style.footerLogo}>
                        <img src={footerLogo} alt="footer-Logo" />
                        <h4>Manba Finaserve</h4>
                    </div>
                    <hr />
                    <div className="row justify-content-between">
                        <div className={`col-xl-6 col-lg-6 col-12 ${style.address}`}>
                            <p>With thousands of people starting up new businesses every day,
                                thousands of fami- lies looking for a new mortgage and so on, the
                                loan companies play a vital role in the today's society...
                            </p>
                            <span>
                                <CiLocationOn /> 312, superdiamond market
                            </span><br />
                            <span>
                                <FiPhone /> +91 22 6212 5000
                            </span>
                        </div>

                        <div className={`col-xl-2 col-lg-6 col-12 ${style.address}`}>
                            <h5>Pages</h5>
                            <ul>
                                <li>
                                    <FaAngleRight /><a href="/"> Home</a>
                                </li>
                                <li>
                                    <FaAngleRight /><a href="/about"> About Us</a>
                                </li>
                                <li>
                                    <FaAngleRight /><a href="/service"> Services</a>
                                </li>
                                <li>
                                    <FaAngleRight /><a href="/contact"> Contact Us</a>
                                </li>
                            </ul>
                        </div>

                        <div className={`col-xl-2 col-lg-6 col-12 ${style.address}`}>
                            <h5>Loan</h5>
                            <ul className={style.category}>
                                <li>
                                    <FaAngleRight /> <a href="/homeloan">Home loan</a>
                                </li>
                                <li>
                                    <FaAngleRight /> <a href="/personalLoan">Personal loan</a>
                                </li>
                                <li>
                                    <FaAngleRight /> <a href="/goldloan">Gold loan</a>
                                </li>
                                <li>
                                    <FaAngleRight /> <a href="/businessloan">Business Loan</a>
                                </li>
                            </ul>
                        </div>

                        <div className={`col-xl-2 col-lg-6 col-12 ${style.address}`}>
                            <h5>Social Media</h5>
                            <ul className={style.category}>
                                <li>
                                    <FaFacebookF /> <a href="/"> Facebook</a>
                                </li>
                                <li>
                                    <FaInstagram /> <a href="/">Instagram</a>
                                </li>
                                <li>
                                    <FaTwitter />  <a href="/">Twitter</a>
                                </li>
                                <li>
                                    <FaLinkedin /> <a href="/">LinkedIn</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={style.copyRight}>
                    <div className={`container ${style.innerFooter}`}>
                        <p>© Manba Finanserve Holdings Limited</p>
                        <div className={style.copyText}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="19"
                                viewBox="0 0 26 19"
                                fill="none">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12.9974 15.8503L0.992188 5.25568V18.8828H25.0026V5.25568L12.9974 15.8503ZM12.9986 12.6545L0.992188 2.05273V0.875H25.0026V2.05273L12.9986 12.6545Z"
                                    fill="black" />
                            </svg>
                            <span> manbafinaserve@gmil.com</span>
                        </div>
                    </div>
                </div>
            </footer >

        </>
    )
};

export default Footer;