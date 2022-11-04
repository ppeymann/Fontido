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
                to="/account/user"
                className={pathname === "/account/user" ? "click" : ""}
              >
                <p>حساب کاربری</p>
              </Link>
            </li>

            <li className="side-item">
              <Link
                to="/account/purchace"
                className={pathname === "/account/purchace" ? "click" : ""}
              >
                <p>تاریخچه خرید</p>
              </Link>
            </li>
            <li className="side-item">
              <Link
                to="/account/freeVideocover"
                className={
                  pathname === "/account/freeVideocover" ? "click" : ""
                }
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
