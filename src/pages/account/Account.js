import React from "react";

import "./Acount.css";

import planIcon from "../../assets/Vector 76.png";
import videoIcon from "../../assets/Group 8747.png";
import coverIcon from "../../assets/Group 8748.png";

const Account = () => {
  return (
    <div className="account">
      <div className="top-main">
        <span className="FL-name">
          <p>نام و نام خانوادگی:</p>
        </span>
        <span className="email">
          <p>ایمیل شما:</p>
        </span>
        <span className="number">
          <p>تلفن همراه شما:</p>
        </span>
      </div>
      {/* ===== */}
      <div className="bottom-main">
        <span className="plan">
          <img src={planIcon} />
          <p>پلن:</p>
        </span>
        <span className="video">
          <img src={videoIcon} />
          <p>ویدیوهای باقی مانده:</p>
        </span>
        <span className="cover">
          <img src={coverIcon} />
          <p>کاورهای باقی مانده:</p>
        </span>
      </div>
    </div>
  );
};

export default Account;
