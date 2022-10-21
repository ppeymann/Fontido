import React from "react";
import "./register.css";
const Register = () => {
  return (
    <div className="container">
      <div className="register">
        <h1 className="register-title">فونتیدو</h1>
        <div className="register-login">
          <h3>ثبت نام | ورود</h3>
        </div>
        <div className="register-text">
          <p>سلام</p>
          <p>لطفا شماره موبایل یا ایمیل خود را وارد کنید</p>
        </div>
        <div className="register-input">
          <input type="text" />
        </div>
        <div className="register-btn__div">
          <button className="register-btn">ورود</button>
        </div>
        <div className="register-copyRight">
          <p className="register-text__copy">
            ورود شما به معنای پذیرش <a href="#">شرایط</a> فونتیدو و{" "}
            <a href="#"> قوانین </a>
            حریم‌خصوصی است
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
