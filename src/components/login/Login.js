import React, { useState } from "react";
import "./login.css";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useToken } from "../../auth/useToken/useToken";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Login = () => {
  const [mobilePhone, setMobilePhone] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useToken();
  const navigate = useNavigate();

  const loginAccount = async () => {
    try {
      const response = await axios.post(
        "https://amirhosseinkarami.ir/api/Account/Login",
        {
          mobilePhone: mobilePhone,
          password: password,
        }
      );

      const { token } = response.data;
      if (token) {
        Swal.fire({
          position: "top-start",
          icon: "success",
          text: "ورد با موفقیت انجام شد",
          showConfirmButton: false,
          timer: 1500,
        });
        setToken(token);
        navigate("/account/user");
      }
    } catch {
      Swal.fire({
        position: "top-start",
        icon: "error",
        text: "نام کاربری یا رمز اشتباه است",
        showConfirmButton: false,
        timer: 1500,
      });
      setMobilePhone("");
      setPassword("");
    }
  };

  return (
    <div className="login">
      <Helmet>
        <title>ورود</title>
      </Helmet>
      <div className="login-container">
        <div className="logo-title">
          <img className="login-logo" src={logo} alt="logo" />
          <h2 className="login-title">فونتیدو</h2>
        </div>
        <div className="login-inputs">
          <input
            value={mobilePhone}
            onChange={(e) => setMobilePhone(e.target.value)}
            type="text"
            className="login-input blue"
            placeholder="شماره همراه"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="login-input green"
            placeholder="رمز عبور"
          />
        </div>
        <div className="login-btns">
          <button onClick={loginAccount} className="login-signUp__btn">
            ورود به حساب کاربری
          </button>
          <Link to="/register" className="login-login__btn">
            ثبت نام
          </Link>
        </div>
        <Link className="login-user_forgot" to={"/forgot"}>
          رمز خود را فراموش کرده اید؟
        </Link>
      </div>
    </div>
  );
};

export default Login;
