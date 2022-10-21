import React from "react";
import "./plan.css";
import videoIcon from "../../assets/Group 8747.png";
import imageIcon from "../../assets/Group 8748.png";
import bascket from "../../assets/Group 8749.png";
const PlanCard = (item) => {
  const { id, title, video, image, descroption, price } = item.item;
  return (
    <div className="placCard">
      <div className="placCard-in">
        <div className="placCard-logo"></div>
        <div className="placeCard-info">
          <h2>{title}</h2>
          <div className="placCard-video">
            <img src={videoIcon} alt="" className="placCard-video__icon" />
            <p className="placCard-video__text">{video}</p>
          </div>
          <div className="placCard-cover">
            <img src={imageIcon} alt="" className="placCard-cover__icon" />
            <p className="placCard-cover__text">{image}</p>
          </div>
          <div className="placCard-descrip">{descroption}</div>
          <div className="placCard-buy">
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
