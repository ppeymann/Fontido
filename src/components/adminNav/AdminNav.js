import React, { useState } from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import "./adminNav.css";
import polygon from "../../assets/Polygon 17.png";
import { Link } from "react-router-dom";
const AdminNav = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="adminNav-container">
      <div className="adminNav-container__flex">
        <h1 className="adminNav-title">فونتیدو</h1>
        <div className="adminNav-views">
          <h3 className="adminNav-views__num">45,546,545</h3>
          <h3 className="adminNav-views__text">بازدید در روز</h3>
        </div>
        <div
          className="adminNav-exit"
          onClick={() => localStorage.removeItem("token")}
        >
          <Link to="/admin/login">خروج</Link>
        </div>
        {/* <div className="nav-login__container" onClick={() => setShow(!show)}>
          <PermIdentityIcon />
          <div className="navbar-submenu__container">
            <img
              src={polygon}
              alt="polygon"
              className={!show ? "nav-submenu__arrow" : "arrow-active"}
            />
            <div className={!show ? "navbar-submenu" : "submenu-active"}>
              <ul className="navbar-submenu__menu"></ul>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AdminNav;
