import React from "react";
import PersonalloanBanner from "../Components/PersonalloanBanner";
import PersonalloanAbout from "../Components/PersonalloanAbout";
import PersonalloanTypes from "../Components/PersonalloanTypes";
import PersonalloanApply from "../Components/PersonalloanApply";

const PersonalLoan = () => {
    return (
        <>
            <PersonalloanBanner />
            <PersonalloanAbout />
            <PersonalloanTypes />
            <PersonalloanApply />
        </>
    )
};

export default PersonalLoan;