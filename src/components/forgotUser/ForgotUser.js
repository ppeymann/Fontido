import React, { useState } from "react";
import "./forgotUser.css";

const ForgotUser = () => {
  const [text, setText] = useState("");

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
        <button className="forgot-btn">ارسال کد</button>
      </div>
    </div>
  );
};

export default ForgotUser;
