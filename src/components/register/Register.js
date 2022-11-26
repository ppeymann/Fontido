import React, { useState } from "react";
import "./register.css";

import logo from "../../assets/logo.png";

import { useToken } from "../../auth/useToken/useToken";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Register = () => {
  const [token, setToken] = useToken();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [mobilePhone, setMobilePhone] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const onSignUp = async () => {
    try {
      const response = await axios.post(
        "https://amirhosseinkarami.ir/api/Account/Register",
        {
          name: name,
          mobilePhone: mobilePhone,
          password: password,
          rePassword: rePassword,
        }
      );
      const { token } = response.data;
      setToken(token);
      Swal.fire({
        position: "top-start",
        icon: "success",
        text: "ثبت نام شما با موفقیت انجام شد",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    } catch {
      Swal.fire({
        position: "top-start",
        icon: "error",
        text: "دوباره تلاش کنید",
        showConfirmButton: false,
        timer: 1500,
      });
      setName("");
      setPassword("");
      setMobilePhone("");
      setRePassword("");
    }
  };

  return (
    <div className="register">
      <Helmet>
        <title>ثبت نام</title>
      </Helmet>
      <div className="register-container">
        <div className="logo-title">
          <img className="register-logo" src={logo} alt="logo" />
          <h2 className="register-title">فونتیدو</h2>
        </div>
        <div className="register-inputs">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="register-input blue"
            placeholder="نام و نام خانوادگی"
          />
          <input
            value={mobilePhone}
            onChange={(e) => setMobilePhone(e.target.value)}
            type="text"
            className="register-input blue"
            placeholder="شماره همراه"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="register-input green"
            placeholder="رمز عبور"
          />
          <input
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            type="password"
            className="register-input green"
            placeholder="تکرار رمز عبور"
          />
        </div>
        <div className="register-btns">
          <button className="register-signUp__btn" onClick={onSignUp}>
            ساحت حساب کاربری
          </button>
          <Link to="/login" className="register-login__btn">
            ورود
          </Link>
        </div>
        <div className="register-copyRight">
          ورود شما به معنای پذیرش شرایط فونتیدو و قوانین حریم‌خصوصی است
        </div>
      </div>
    </div>
  );
};

export default Register;
