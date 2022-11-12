import React from "react";
import { useNavigate } from "react-router-dom";
import "./adminForget.css";

const AdminForget = () => {
  const navigate = useNavigate();
  return (
    <div className="adminForget">
      <div className="adminForget-container">
        <h1 className="adminForget-title">فراموشی رمز عبور ادمین</h1>
        <div className="adminForget-email-back">
          <h4 className="adminForet-email__title">ایمیل خود را وارد کنید</h4>
          <button className="adminForget-back" onClick={() => navigate(-1)}>
            بازگشت
          </button>
        </div>
        <input type="email" className="adminForget-input" />
        <button className="adminForget-btn">
          ارسال لینک تغییر پسورد به ایمیل
        </button>
      </div>
    </div>
  );
};

export default AdminForget;
