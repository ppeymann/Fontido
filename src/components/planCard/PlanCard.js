import React, { useState } from "react";
import "./plan.css";
import videoIcon from "../../assets/Group 8747.png";
import imageIcon from "../../assets/Group 8748.png";
import bascket from "../../assets/Group 8749.png";
import axios from "axios";
import { useToken } from "../../auth/useToken/useToken";
import { useNavigate } from "react-router-dom";

const PlanCard = (item) => {
  const { planId, title, videoCount, storyAndCoverCount, descroption, price } =
    item.item;
  const [token] = useToken();
  const navigate = useNavigate();
  const buying = () => {
    axios
      .post(
        `https://amirhosseinkarami.ir/api/Order/BuyPlan?planId=${planId}`,
        {},
        {
          headers: { authorization: `Bearer ${token}` },
        }
      )
      .then((res) => window.location.replace(res.data.redirectUrl));
  };
  return (
    <div className="planCard">
      <div className="planCard-in">
        <div className="planCard-logo"></div>
        <div className="planeCard-info">
          <h2>پلن {title}</h2>
          <div className="planCard-video">
            <img src={videoIcon} alt="" className="planCard-video__icon" />
            <p className="planCard-video__text">
              ادیت و ساخت ویدیو {videoCount} عدد
            </p>
          </div>
          <div className="planCard-cover">
            <img src={imageIcon} alt="" className="planCard-cover__icon" />
            <p className="planCard-cover__text">
              ساخت استوری و بنر و کاور پوستر {storyAndCoverCount}عدد
            </p>
          </div>
          <div className="planCard-descrip">
            پس از تهیه این اشتراک شما به صورت مادام العمر میتوانید کاملا به فایل
            های طراحی شده خوددسترسی داشته باشید و امکان تهیه این اشتراک برای
            تمام کارت های شما میسر می باشد و اطلاعات شما نزد ما کاملا محفوظ می
            باشد.
          </div>
          <div className="planCard-buy">
            <button className="buying-btn" onClick={buying}>
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
