import React from "react";
import '../Stylesheet/BusinessloanReason.css';
import learned from "../Assets/learned.jpg.jpg";
import businessmen from "../Assets/business men.jpg.jpg";
import businesswomen from "../Assets/business women.jpg.jpg";

const BusinessloanReason = () => {
    return (
        <>
            <div className="businessLoanReason">
                <div className="container">
                    <h1>Reason to Choose Us</h1>
                    <p>Leveraging business loans strategically enhances growth, stability,
                        and long-term prosperity through responsible financial management
                        and effective deployment.
                    </p>

                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                            <div className="businessReasonContent">
                                <img src={learned} alt="learned" />
                                <p>
                                    When embarking on a new business venture, securing adequate
                                    capital is often the first and most significant hurdle. A
                                    business loan provides the initial capital injection required
                                    to transform your vision into reality. It covers startup costs
                                    such as product development, marketing, office space, and
                                    equipment.
                                </p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                            <div className="businessReasonContent">
                                <img src={businessmen} alt="businessmen" />
                                <p>
                                    For existing businesses, expansion is the name of the game.
                                    Whether you're looking to open new locations, hire additional
                                    staff, or diversify your product line, a business loan can
                                    provide the financial foundation necessary to fund these
                                    growth initiatives.
                                </p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                            <div className="businessReasonContent">
                                <img src={businesswomen} alt="businesswomen" />
                                <p>
                                    Many businesses, particularly those in retail or hospitality,
                                    experience seasonal fluctuations in revenue. A business loan
                                    can help bridge the gap during slow periods, ensuring that
                                    your business remains stable and can capitalize on peak
                                    seasons.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default BusinessloanReason;