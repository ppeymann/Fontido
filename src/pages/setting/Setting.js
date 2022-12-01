import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Support from "../../components/Support and Settings/Support";
import Footer from "../../components/footer/Footer";
import "./setting.css";
import axios from "axios";
import { useToken } from "../../auth/useToken/useToken";
import Swal from "sweetalert2";

const Set = () => {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [reNewPass, setReNewPass] = useState("");
  const [token] = useToken();

  const url = "https://amirhosseinkarami.ir";
  const changePass = () => {
    axios
      .post(
        url + "/api/Account/ChangePassword",
        {
          oldPassword: oldPass,
          newPassword: newPass,
          confrimPassword: reNewPass,
        },
        { headers: { authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        Swal.fire({
          position: "center",
          text: "رمز با موفقیت تغییر کرد",
          timer: 1500,
          icon: "success",
          showConfirmButton: false,
        });
        setOldPass("");
        newPass("");
        reNewPass("");
        console.log(res);
      });
    //   .catch(() => {
    //     Swal.fire({
    //       position: "center",
    //       text: "دوباره تلاش کنید",
    //       timer: 1500,
    //       icon: "error",
    //       showConfirmButton: false,
    //     });
    //   });
  };

  return (
    <div className="setting">
      <div className="setting-container">
        <h1 className="setting-title">تغییر رمز عبور</h1>
        <div className="setting-inputs">
          <input
            className="setting-input"
            type="text"
            dir="ltr"
            value={oldPass}
            onChange={(e) => setOldPass(e.target.value)}
            placeholder="رمز عبور قدیم"
          />
          <input
            className="setting-input"
            type="text"
            dir="ltr"
            value={newPass}
            onChange={(e) => setNewPass(e.target.value)}
            placeholder="رمز عبور جدید"
          />
          <input
            className="setting-input"
            type="text"
            dir="ltr"
            value={reNewPass}
            onChange={(e) => setReNewPass(e.target.value)}
            placeholder="تکرار رمز عبور"
          />
        </div>
        <button className="setting-btn" onClick={changePass}>
          تغییر رمز عبور
        </button>
      </div>
    </div>
  );
};

const Setting = () => {
  return (
    <>
      <Navbar />
      <Support />
      <Sidebar />
      <Set />
      <Footer />
    </>
  );
};

export default Setting;
