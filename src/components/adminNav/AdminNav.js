import React from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import "./adminNav.css";
import { Link } from "react-router-dom";
const AdminNav = () => {
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
        <PermIdentityIcon className="adminNav-icon" />
      </div>
    </div>
  );
};

export default AdminNav;
