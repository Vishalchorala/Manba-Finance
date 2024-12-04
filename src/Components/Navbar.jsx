import React from "react";
import style from '../Stylesheet/Navbar.module.css';
import { LuAlignJustify } from "react-icons/lu";
import logo from '../Assets/logo.png';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className={`navbar navbar-expand-lg bg-light ${style.Navbar} `}>
                <div className="container d-flex align-item-center">
                    <Link className={`navbar-brand ${style.logo}`} to="/">
                        <img src={logo} alt="logo" />
                        <h1>Manba Finaserve</h1>
                    </Link>
                    <button
                        className={`navbar-toggler ${style.toggleBtn}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <LuAlignJustify />
                    </button>   
                    <div className={`collapse navbar-collapse ${style.navbar_Collapse}`} id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/service">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div >
            </nav >

        </>
    )
};

export default Navbar;