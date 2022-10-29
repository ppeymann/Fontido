import React from "react";
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className="sidebar">
      <div className="side-container">
        <div className="side-menu">
          <ul className="side-menu-list">
            <li className="side-item">
              <Link
                to="/account"
                className={pathname === "/account" ? "click" : ""}
              >
                <p>حساب کاربری</p>
              </Link>
            </li>
            <li className="side-item">
              <Link
                to="/planbuy"
                className={pathname === "/planbuy" ? "click" : ""}
              >
                <p>خرید پلن</p>
              </Link>
            </li>
            <li className="side-item">
              <Link
                to="/historybuy"
                className={pathname === "/historybuy" ? "click" : ""}
              >
                <p>تاریخچه خرید</p>
              </Link>
            </li>
            <li className="side-item">
              <Link
                to="/freevc"
                className={pathname === "/freevc" ? "click" : ""}
              >
                <p>ویدیو و کاور رایگان</p>
              </Link>
            </li>
            <li className="side-item">
              <Link to="/">
                <p>خروج</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
