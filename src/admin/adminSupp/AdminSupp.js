import React, { useState } from "react";
import "./adminSupp.css";

import AdminSidebar from "../../components/adminSidebar/AdminSidebar";
import AdminNav from "../../components/adminNav/AdminNav";
import { Helmet } from "react-helmet";

const AdminSupport = () => {
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);

  return (
    <div className="supp">
      <Helmet>
        <title>ادمین | پشتیبانی</title>
      </Helmet>
      <div className="supp-container">
        <input
          type="text"
          placeholder="جستجوی کاربر"
          className="supp-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="supp-answer__container">
          <div className="answer-top">
            <p className="answer-top__name" onClick={() => setShow(!show)}>
              پیمان ملک
            </p>
            <p className="answer-top__title">موضوع:خرید اشتراک</p>
            <p className="answer-top__btn">پاسخ پیام</p>
          </div>
          <div className={show ? "answer-mid__active" : "answer-mid"}>
            <p className="answer-mid__title">پلن:سه ماهه</p>
            <p className="answer-mid__title">1402/01/01</p>
            <p className="answer-mid__title">11:00</p>
          </div>
          <div className={show ? "answer-bot__active" : "answer-bot"}>
            <p className="answer-bot__text">
              با سلام و خسته نباشید خدمت شما بنده اشتراک 3 ماهه رو تهیه کردم .و
              در حال حاظر اجازه استفاده از این پلن رو ندارم و نمیتونم ار خدماتش
              استفاده کنم
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AdminSupp = () => {
  return (
    <>
      <AdminNav />
      <AdminSidebar />
      <AdminSupport />
    </>
  );
};

export default AdminSupp;
