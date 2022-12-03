import React, { useState } from "react";
import "./adminChange.css";

const adminChange = () => {
  const [newPass, setNewPass] = useState("");
  const [reNewPass, setReNewPass] = useState("");
  return (
    <div className="change">
      <div className="change-container">
        <h1 className="change-title">تعیین رمز عبور جدید</h1>
        <div className="change-inputs">
          <input
            type="text"
            className="change-input"
            value={newPass}
            onChange={(e) => setNewPass(e.target.value)}
            placeholder="رمز عبور جدید"
          />
          <input
            type="text"
            value={reNewPass}
            onChange={(e) => setReNewPass(e.target.value)}
            className="change-input"
            placeholder="تکرار رمز عبور جدید"
          />
        </div>
        <button className="change-btn">تغییر رمز عبور</button>
      </div>
    </div>
  );
};

export default adminChange;
