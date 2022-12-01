import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./forgotUser.css";

const ForgotUser = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const sendMobileNum = () => {
    axios
      .post(
        `https://amirhosseinkarami.ir/api/Account/SendUserChangePasswordId?mobilePhone=${text}`
      )
      .then((res) => {
        setData(res.data);

        Swal.fire({
          position: "center",
          text: "لینک تغییر پسورد برای شما ارسال شد. پس از ورود به لینک رمز خود را تغییر دهید",
          icon: "success",
        });
        navigate("/", { replace: true });
      })
      .catch(() => {
        Swal.fire({
          position: "center",
          icon: "error",
          text: "شماره وارد شده اشتباه می باشد",
        });
      });
  };

  return (
    <div className="forgot">
      <div className="forgot-container">
        <h1 className="forgot-title">فراموشی رمز عبور</h1>
        <input
          className="forgot-inp"
          type="tel"
          placeholder="شماره همراه خود را وارد نمایید"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="forgot-btn" onClick={sendMobileNum}>
          ارسال کد
        </button>
      </div>
    </div>
  );
};

export default ForgotUser;
