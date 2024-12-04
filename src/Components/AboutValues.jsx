import React from "react";
import '../Stylesheet/AboutValues.css';

const AboutValues = () => {
    return (
        <>
            <div className="aboutValue">
                <div className="container">
                    <div className="title">
                        <h3>Values</h3>

                    </div>
                    <div className="aboutValuePara">
                        <p>
                            Our values are anchored around our business ethics, consumer focus
                            and
                        </p>
                        <p>corporate responsibility towards society at large.</p>
                    </div>
                    <div className="row aboutValueCreate">
                        <div className="col-lg-2 col-12">
                            <h3>C</h3>
                            <p>Cost-effective & simple</p>
                        </div>
                        <div className="col-lg-2 col-12">
                            <h3>R</h3>
                            <p>Respect for all</p>
                        </div>
                        <div className="col-lg-2 col-12">
                            <h3>E</h3>
                            <p>Exemplary governance</p>
                        </div>
                        <div className="col-lg-2 col-12">
                            <h3>A</h3>
                            <p>Accountability, professionalism & discipline</p>
                        </div>
                        <div className="col-lg-2 col-12">
                            <h3>T</h3>
                            <p>CTransparency & integrity</p>
                        </div>
                        <div className="col-lg-2 col-12">
                            <h3>E</h3>
                            <p>Effective teamwork and commitment</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AboutValues;