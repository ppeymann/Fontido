import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SortIcon from "@mui/icons-material/Sort";
import { useToken } from "../../auth/useToken/useToken";
import "./navbar.css";
import axios from "axios";

const Navbar = () => {
  const { pathname } = useLocation();

  const [token] = useToken();
  const [data, setData] = useState({});

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
        <Link to={token ? "/account/user" : "/login"} className="nav-login">
          <p className="login-text">{token ? data.userName : "ورود"}</p>
          <PermIdentityIcon />
        </Link>
        <div className="hambergur-menu">
          <SortIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
