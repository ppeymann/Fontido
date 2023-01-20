import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SortIcon from "@mui/icons-material/Sort";
import { useToken } from "../../auth/useToken/useToken";
import "./navbar.css";
import axios from "axios";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import logo from "../../assets/logo.png";
import polygon from "../../assets/Polygon 17.png";
import { Divider } from "@mui/material";

const Navbar = () => {
  const { pathname } = useLocation();

  const [token] = useToken();
  const [data, setData] = useState({});
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    axios
      .get("https://amirhosseinkarami.ir/api/UserPanel/GetUserInformation", {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="navbar">
      <div className="nav-container">
        <Link to="/">
          <img src={logo} alt="logo" className="navbar-logo" />
        </Link>
        <h2 className="title">
          <Link to="/">فونتیدو</Link>
        </h2>
        <nav className="nav-menu">
          <ul className="nav-menu-list">
            <li className="item-menu">
              <Link
                to="/story"
                className={pathname == "/story" ? "active" : ""}
              >
                ساخت استوری و کاور
              </Link>
            </li>
            <li className="item-menu">
              <Link
                to="/video"
                className={pathname == "/video" ? "active" : ""}
              >
                ساخت ویرایش ویدیو
              </Link>
            </li>
            <li className="item-menu">
              <Link to="/sub" className={pathname == "/sub" ? "active" : ""}>
                تهیه اشتراک
              </Link>
            </li>
            <li className="item-menu">
              <Link
                to="/learn"
                className={pathname == "/learn" ? "active" : ""}
              >
                آموزش
              </Link>
            </li>
          </ul>
        </nav>
        <div className="nav-login__container" onClick={() => setShow(!show)}>
          <div className="login-text">
            <Link
              to={!token ? "/login" : "/account/user"}
              className="nav-login"
            >
              {token ? data.userName : "ورود"}
            </Link>
            <PermIdentityIcon className="login-nav" />
          </div>
          {token && (
            <div className="navbar-submenu__container">
              <img
                src={polygon}
                alt="polygon"
                className={!show ? "nav-submenu__arrow" : "arrow-active"}
              />
              <div className={!show ? "navbar-submenu" : "submenu-active"}>
                <ul className="navbar-submenu__menu">
                  <li
                    onClick={() => setShow(false)}
                    className="navbar-submenu__item"
                  >
                    <Link to="/account/user">حساب کاربری</Link>
                  </li>
                  <Divider />
                  <li
                    onClick={() => setShow(false)}
                    className="navbar-submenu__item"
                  >
                    <Link to="/account/purchace">تاریخچه خرید</Link>
                  </li>
                  <Divider />
                  <li
                    onClick={() => setShow(false)}
                    className="navbar-submenu__item"
                  >
                    <Link to="/account/freeVideocover">کاور رایگان</Link>
                  </li>
                  <Divider />
                  <li
                    onClick={() => localStorage.removeItem("token")}
                    className="navbar-submenu__item"
                  >
                    <Link to="/">خروج</Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div
          className="hambergur-menu"
          onClick={() => {
            setActive(true);
            setShow(false);
          }}
        >
          <SortIcon />
        </div>
        <div className={`drower ${active ? "drower-active" : ""}`}>
          <ul className="drower-lists">
            <ChevronLeftIcon
              className="close-icone"
              onClick={() => setActive(false)}
            />
            <Link to="/story" className="drower-list">
              ساخت استوری و کاور
            </Link>
            <Link to="/video" className="drower-list">
              ساخت ویدیو
            </Link>
            <Link to="/sub" className="drower-list">
              تهیه اشتراک
            </Link>
            <Link to="/learn" className="drower-list">
              {" "}
              آموزش{" "}
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
