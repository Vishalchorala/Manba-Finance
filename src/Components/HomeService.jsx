import React from "react";
import style from '../Stylesheet/HomeService.module.css';
import HomeServiceImg from '../Assets/homeServiceimg.jpg';

const HomeService = () => {
    return (
        <>
            <div className={style.HomeService}>
                <div className="container">
                    <img className={style.HomeServiceImg} src={HomeServiceImg} alt="HomeServiceImg" />
                </div>
            </div>
        </>
    )
};

export default HomeService;