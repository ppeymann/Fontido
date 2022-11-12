import React, { useState } from "react";
import "./plan.css";
import videoIcon from "../../assets/Group 8747.png";
import imageIcon from "../../assets/Group 8748.png";
import bascket from "../../assets/Group 8749.png";

const PlanCard = (item) => {
  const { planId, title, video, image, descroption, price } = item.item;
  return (
    <div className="planCard">
      <div className="planCard-in">
        <div className="planCard-logo"></div>
        <div className="planeCard-info">
          <h2>پلن{title}</h2>
          <div className="planCard-video">
            <img src={videoIcon} alt="" className="planCard-video__icon" />
            <p className="planCard-video__text">{video}</p>
          </div>
          <div className="planCard-cover">
            <img src={imageIcon} alt="" className="planCard-cover__icon" />
            <p className="planCard-cover__text">{image}</p>
          </div>
          <div className="planCard-descrip">{descroption}</div>
          <div className="planCard-buy">
            <button className="buying-btn">
              <img src={bascket} alt="buy" className="buying-btn__icon" />
              خرید این پلن
            </button>
            <h3 className="price-text">{price} تومان</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
