import React from "react";
import HomeBanner from "../Components/HomeBanner";
import HomeProvide from "../Components/HomeProvide";
import HomeAbout from "../Components/HomeAbout";
import HomeService from "../Components/HomeService";
import HomeSuccess from "../Components/HomeSuccess";
import HomeCashLoan from "../Components/HomeCashLoan";

const Home = () => {
    return (
        <>
            <HomeBanner />
            <HomeProvide />
            <HomeAbout />
            <HomeService />
            <HomeSuccess />
            <HomeCashLoan />
        </>
    )
};

export default Home;