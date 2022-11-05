import React from "react";
import { Link } from "react-router-dom";
import "./adminLogin.css";

const AdminLogin = () => {
  return (
    <div className="adminLogin">
      <div className="adminLogin-container">
        <h1 className="adminLogin-title">
          پنل ادمین <span>فونتیدو</span>
        </h1>
        <div className="adminLogin-inputs">
          <div className="adminLogin-username">
            <label
              htmlFor="adminLogin-input__username"
              className="adminLogin-label__username"
            >
              نام کاربری
            </label>
            <input type="text" id="adminLogin-input__username" />
          </div>
          <div className="adminLogin-password">
            <label
              htmlFor="adminLogin-input__password"
              className="adminLogin-label__password"
            >
              رمز عبور
            </label>
            <input type="password" id="adminLogin-input__password" />
          </div>
        </div>
        <div className="adminLogin-btns">
          <button className="adminLogin-btn__enter">ورود</button>
          <Link to="/admin/forget" className="adminLogin-btn__forget">
            فراموشی رمز عبور
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
