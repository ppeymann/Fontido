import React, { useState } from "react";
import "./sms.css";

const Sms = () => {
  const [smsAllText, setSmsAllText] = useState("");
  const [smsText, setSmsText] = useState("");
  const [num, setNum] = useState("");

  return (
    <div className="sms-container">
      <div className="sms-all">
        <textarea
          type="text"
          className="sms-text"
          rows={5}
          placeholder="متن خود را وارد کنید..."
          value={smsAllText}
          onChange={(e) => setSmsAllText(e.target.value)}
        />
        <button className="sms-btn">ارسال به تمام کاربران</button>
      </div>
      <div className="sms-all sms-one">
        <input
          className="sms-num"
          value={num}
          onChange={(e) => setNum(e.target.value)}
          type="tel"
          placeholder="شماره تلفن را وارد کنید"
        />
        <textarea
          type="text"
          className="sms-text"
          placeholder="متن خود را وارد کنید..."
          value={smsText}
          rows={5}
          onChange={(e) => setSmsText(e.target.value)}
        />
        <button className="sms-btn">ارسال پیام به شماره همراه</button>
      </div>
    </div>
  );
};

export default Sms;
