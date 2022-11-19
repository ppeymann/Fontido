import React, { useState } from "react";
import "./sms.css";

const Sms = () => {
  const [smsText, setSmsText] = useState("");

  return (
    <div className="sms-container">
      <textarea
        type="text"
        className="sms-text"
        placeholder="متن خود را وارد کنید..."
        value={smsText}
        onChange={(e) => setSmsText(e.target.value)}
      />
      <button className="sms-btn">ارسال به تمام کاربران</button>
    </div>
  );
};

export default Sms;
