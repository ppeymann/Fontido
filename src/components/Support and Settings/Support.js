import React from "react";
import { Link } from "react-router-dom";
import "../Support and Settings/Support.css";

import supportIcon from "../../assets/Group 8754.png";
import settingsIcon from "../../assets/Group 8755.png";

const Support = () => {
  return (
    <div className="main">
      <div className="support-container">
        <Link to="/account/supporting" className="support">
          <img src={supportIcon} />
          <p>پشتیبانی</p>
        </Link>

        <span className="line"></span>

        <Link to="/account/setting" className="settings">
          <img src={settingsIcon} />
          <p>تنظیمات</p>
        </Link>
      </div>
    </div>
  );
};

export default Support;
