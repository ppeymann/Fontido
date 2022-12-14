import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToken } from "../../auth/useToken/useToken";
import "./adminLogin.css";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AdminLogin = () => {
  const [mobilePhone, setMobilePhone] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useToken();
  const navigate = useNavigate();
  const loginAdmin = async () => {
    try {
      const response = await axios.post(
        "https://amirhosseinkarami.ir/api/Admin/Account/LoginPanel",
        {
          mobilePhone: mobilePhone,
          password: password,
        }
      );
      const { token } = response.data;
      setToken(token);
      if (token) {
        Swal.fire({
          position: "top-start",
          icon: "success",
          text: "ورود با موفقیت انجام شد",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      navigate("/admin/notif");
      console.log(token);
    } catch {
      Swal.fire({
        position: "top-start",
        icon: "error",
        text: "نام کاربری یا رمز عبور اشتباه است",
        showConfirmButton: false,
        timer: 1500,
      });
      setMobilePhone("");
      setPassword("");
    }
  };

  return (
    <div className="adminLogin">
      <Helmet>
        <title>ادمین | ورود</title>
      </Helmet>
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
            <input
              value={mobilePhone}
              onChange={(e) => setMobilePhone(e.target.value)}
              type="text"
              id="adminLogin-input__username"
            />
          </div>
          <div className="adminLogin-password">
            <label
              htmlFor="adminLogin-input__password"
              className="adminLogin-label__password"
            >
              رمز عبور
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="adminLogin-input__password"
            />
          </div>
        </div>
        <div className="adminLogin-btns">
          <button onClick={loginAdmin} className="adminLogin-btn__enter">
            ورود
          </button>
          <Link to="/admin/forget" className="adminLogin-btn__forget">
            فراموشی رمز عبور
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
