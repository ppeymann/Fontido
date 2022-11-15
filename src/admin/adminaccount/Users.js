import React from "react";

import { api } from "../../server/api";
// ccs
import "./users.css";

// components
import AdminNav from "../../components/adminNav/AdminNav";
import AdminSidebar from "../../components/adminSidebar/AdminSidebar";

const Users = () => {
  let info = api;
  return (
    <div className="users">
      <div className="container">
        <div className="media-side">
          <div className="media-container">
            <span className="top-items">
              <p className="right-main">کاربران:۸،۳۴۳،۳۲۳</p>
              <p>تعداد کل اشتراکات:۲،۳۴۴،۳۴۳</p>
            </span>
            <span className="bottom-items">
              <p>تعداد کل ویدیوهای ساخته شده:۱،۲۲۲،۳۴۴</p>
              <p>تعداد کل کاورهای ساخته شده:۱،۳۲۲،۲۳۴</p>
            </span>
          </div>
        </div>
        {/* //media-side */}
        <div className="top-side">
          <div className="search">
            <input placeholder="جستجوی کاربر" />
          </div>
          <div className="information">
            <p>امیرحسین کرمی</p>
            <p className="email">amirhosseinkarami2890@gmail.com</p>
            <span className="buttons">
              <button className="block">مسدود سازی</button>
              <button className="delete">حذف کاربر</button>
            </span>
          </div>
        </div>

        <div className="bottom-side">
          {info.map((item) => (
            <div className="items-container">
              <div className="title item">{item.title}</div>
              <div className="video item">{item.video}</div>
              <div className="image item">{item.image}</div>
              <div className="date item">{item.date}</div>
              <div className="time item">{item.time}</div>
              <div className="price item">{item.price}</div>
              <div className="traffic item">{item.traffic}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const UsersReturn = () => {
  return (
    <>
      <AdminNav />
      <AdminSidebar />
      <Users />
    </>
  );
};

export default UsersReturn;
