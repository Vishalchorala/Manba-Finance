import React from "react";
import BusinessloanBanner from "../Components/BusinessloanBanner";
import BusinessloanFactor from "../Components/BusinessloanFactor";
import BusinessloanReason from "../Components/BusinessloanReason";

const BusinessLoan = () => {
    return (
        <>
            <BusinessloanBanner />
            <BusinessloanReason />
            <BusinessloanFactor />
        </>
    )
};
export default BusinessLoan;