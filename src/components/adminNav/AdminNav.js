import React, { useState } from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import "./adminNav.css";
import polygon from "../../assets/Polygon 17.png";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
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
        <div
          className="adminNav-login__container"
          onClick={() => setShow(!show)}
        >
          <PermIdentityIcon />
          <div className="adminNavbar-submenu__container">
            <img
              src={polygon}
              alt="polygon"
              className={
                !show ? "adminNav-submenu__arrow" : "adminArrow-active"
              }
            />
            <div
              className={!show ? "adminNavbar-submenu" : "adminSubmenu-active"}
            >
              <ul className="adminNavbar-submenu__menu">
                <li
                  className="adminNavbar-submenu__item"
                  onClick={() => setShow(false)}
                >
                  <Link to="/admin/notif">اعلانات</Link>
                </li>
                <Divider />
                <li
                  className="adminNavbar-submenu__item"
                  onClick={() => setShow(false)}
                >
                  <Link to="/admin/user">کاربران</Link>
                </li>
                <Divider />
                <li
                  className="adminNavbar-submenu__item"
                  onClick={() => setShow(false)}
                >
                  <Link to="/admin/financial">مالی</Link>
                </li>
                <Divider />
                <li
                  className="adminNavbar-submenu__item"
                  onClick={() => setShow(false)}
                >
                  <Link to="/admin/support">پشتیبانی</Link>
                </li>
                <Divider />
                <li
                  className="adminNavbar-submenu__item"
                  onClick={() => setShow(false)}
                >
                  <Link to="/admin/security">امنیت</Link>
                </li>
                <Divider />
                <li
                  className="adminNavbar-submenu__item"
                  onClick={() => {
                    setShow(false);
                    localStorage.removeItem("token");
                  }}
                >
                  <Link to="/admin/login">خروج</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNav;
