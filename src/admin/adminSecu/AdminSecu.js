import React, { useState } from "react";
import "./adminSecu.css";

import AdminNav from "../../components/adminNav/AdminNav";
import AdminSidebar from "../../components/adminSidebar/AdminSidebar";
import { Grid } from "@mui/material";
import { Helmet } from "react-helmet";

const Security = () => {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [reNewPass, setReNewPass] = useState("");

  return (
    <div className="secu">
      <Helmet>
        <title>ادمین | امنیت</title>
      </Helmet>
      <div className="secu-container">
        <h4 className="secu-title">دستگاه های فعال</h4>
        <div className="secu-device__container">
          <Grid
            container
            justifyContent={
              window.screenX > "500px" ? "space-around" : "space-evenly"
            }
            className="secu-devices"
          >
            <Grid item xs={2} className="secu-device__titel">
              دستگاه
            </Grid>
            <Grid item xs={2} className="secu-device__kind">
              Dell
            </Grid>
            <Grid item xs={2} className="secu-device__date">
              1401/01/01
            </Grid>
            <Grid item xs={2} className="secu-device__code">
              با کد تایید
            </Grid>
            <Grid item xs={2} className="secu-device__active">
              معمولی
            </Grid>
          </Grid>
        </div>
        <div className="secu-device__container">
          <Grid
            container
            justifyContent={
              window.screenX > "500px" ? "space-around" : "space-evenly"
            }
            className="secu-devices"
          >
            <Grid item xs={2} className="secu-device__titel">
              موبایل
            </Grid>
            <Grid item xs={2} className="secu-device__kind">
              samsong
            </Grid>
            <Grid item xs={2} className="secu-device__date">
              1401/01/01
            </Grid>
            <Grid item xs={2} className="secu-device__code">
              بدون کد تایید
            </Grid>
            <Grid item xs={2} className="secu-device__remove">
              حذف
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="secu-changePass">
        <input
          type="text"
          placeholder="پسورد قدیمی"
          className="changePass-input sec-changePass__oldPass"
          value={oldPass}
          onChange={(e) => setOldPass(e.target.value)}
        />
        <input
          type="text"
          placeholder="پسورد جدید"
          className="changePass-input sec-changePass__newPass"
          value={newPass}
          onChange={(e) => setNewPass(e.target.value)}
        />
        <input
          type="text"
          placeholder="تکرار پسورد "
          className="changePass-input sec-changePass__reNewPass"
          value={reNewPass}
          onChange={(e) => setReNewPass(e.target.value)}
        />
        <button className="changePass-btn">تغییر پسورد</button>
      </div>
      <div className="twoStep">
        <h4 className="twoStep-title">تایید دو مرحله ای ورود با ایمیل</h4>
        <div className="twoStep-top">
          <input
            type="email"
            className="twoStep-email"
            placeholder="ایمیل خود را وارد کنید"
          />
          <button className="twoStep-top__btn">ارسال کد</button>
        </div>
        <div className="twoStep-down">
          <input
            type="text"
            className="twoStep-code"
            placeholder="کد را وارد کنید"
          />
          <button className="twoStep-down__btn">تغییر پسورد ادمین</button>
        </div>
      </div>
    </div>
  );
};

const AdminSecu = () => {
  return (
    <>
      <AdminNav />
      <AdminSidebar />
      <Security />
    </>
  );
};

export default AdminSecu;
