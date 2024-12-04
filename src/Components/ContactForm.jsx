import React from "react";
import '../Stylesheet/ContactForm.css';

const ContactForm = () => {
    return (
        <>
            <div className="container">
                <div className="contactForm">
                    <div className="section">
                        <h2>Get In Touch</h2>
                        <p>Please contact us or send us an email.</p>

                        <form>
                            <div className="row">
                                <div className="col-lg-6 col-md-12 inputText ">
                                    <input type="text" name="name" placeholder="Your Name" autoComplete="off" />
                                </div>
                                <div className="col-lg-6 col-md-12 inputText ">
                                    <input type="email" name="email" placeholder="Your E-mail" autoComplete="off" />
                                </div>
                                <div className="col-lg-6 col-md-12 inputText ">
                                    <input type="tel" name="number" placeholder="Your Number" pattern="^\d{10}$" />
                                </div>
                                <div className="col-lg-6 col-md-12 inputText ">
                                    <input type="text" name="city" id="city" placeholder="Your City" />
                                </div>
                            </div>
                            <select
                                id="loans" name="loans" className="select inputText" placeholder="select your loan" >
                                <option>---Select Your Loan---</option>
                                <option>Home Loan</option>
                                <option>Personal Loan</option>
                                <option>Gold Loan</option>
                                <option>Business Loan</option>
                            </select>
                            <input
                                type="text" name="message" id="message" placeholder="Your Message" className="messageInput" />
                            <div style={{ textAlign: "center" }}>
                                <button className="submitBtn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ContactForm;