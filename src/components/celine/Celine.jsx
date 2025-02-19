import React from 'react';
import CarImage from "../../assets/Car3.jpg";
import "../celine/Celine.css";
import CarImage5 from "../../assets/Car5.jpg";
import CarImage2 from "../../assets/Car4.jpg";
import CarImage66 from "../../assets/car66.jpg";
import CarImage7 from "../../assets/car7.jpg";
import CarImage8 from "../../assets/Car8.jpg";

const Celine = () => {
    return (
        <div className={"container"}>
            <h2 className="h22">types of machines</h2>
            <div className="cars">
                <img className="car1" src={CarImage2} alt="Car"/>
                <img className="car1" src={CarImage66} alt="Car"/>
                <img className="car1" src={CarImage5} alt="Car"/>
                <img className="car1" src={CarImage} alt="Car"/>
                <img className="car1" src={CarImage7} alt="Car"/>
                <img className="car1" src={CarImage8} alt="Car"/>
            </div>
        </div>
    );
};

export default Celine;

