import React from "react";
import '../Stylesheet/AboutAbout.css';
import { Link } from "react-router-dom";

const AboutAbout = () => {
    return (
        <>
            <div className="container aboutAbout">
                <div className="aboutMsgBtn">
                    <Link to="/service" >
                        <h4 className="aboutWelcomeBtn">WELCOME MESSAGE</h4>
                    </Link>
                </div>

                <h3>Who We Are</h3>

                <div className="aboutAbout-para">
                    <p>
                        specialized financial institution that supplies credit for the
                        purchase of consumer goods and services by purchasing the time-sales
                        contracts of merchants or by granting small loans directly to
                        consumers. Specialized consumer finance agencies now operate
                        throughout western Europe, Canada, the United States, Australia,
                        Japan, and some Latin American countries. Although they existed in
                        the early 1900s, their greatest development came after World War II.
                    </p>

                    <p>
                        Large-sales finance companies, which operate by purchasing unpaid
                        customer accounts at a discount from merchants and collecting
                        payments due from consumers, were a response to the need for
                        installment financing for the purchase of automobiles in the early
                        1900s. Ally Financial, for example, was established as the General
                        Motors Acceptance Corporation (GMAC) in 1919 to purchase automobile
                        accounts receivable from car dealers who were themselves unable to
                        finance time purchases. Many companies in both Europe and the United
                        States continue to specialize in financing purchases of particular
                        commodities and remain closely associated with specific
                        manufacturers. Some also extend credit for wholesale purchases by
                        retail dealers.
                    </p>

                    <p>
                        Consumer finance or small-loan companies also arose in the 1900s.
                        Until then the need for consumer loans had been met primarily by
                        illegal “loan shark” activities because it was unprofitable for
                        banks to make small loans at rates below legally set usury levels.
                        In 1911 several states in the United States began adopting
                        small-loan laws that authorized loans to consumers at rates above
                        usury levels, making it financially practical to operate a consumer
                        loan business. Today many companies engage both in the sales-finance
                        business and in making loans directly to consumers.
                    </p>
                </div>
            </div>

        </>
    )
};

export default AboutAbout