import React, { useState } from "react";
import AdminNav from "../../components/adminNav/AdminNav";
import AdminSidebar from "../../components/adminSidebar/AdminSidebar";
import Sms from "../../components/sms/Sms";
import "../adminaccount/notificatins.css";

const Notifications = () => {
  const [notifPage, setNotifPage] = useState(false);

  return (
    <div className="notifications">
      <div className="notif-container">
        <div className="check-side">
          <p>اعلان داخل سایت</p>
          <label>
            <input
              type="checkbox"
              value={notifPage}
              onChange={() => setNotifPage(!notifPage)}
            />
            <span className="check"></span>
          </label>
          <p>اعلان با پیامک</p>
        </div>
        {notifPage ? (
          <>
            <div className="message">
              <p> این اعلانات در بالای صفحه نماش داده خواهد شد</p>
            </div>

            <div className="notif">
              <div className="notif-row">
                <p> کاهش قیمت ها به مناسبت روز برنامه نویس</p>
                <button className="buy">خرید</button>
              </div>
              <span className="notif-delete">
                <button>حذف اعلان قبلی</button>
              </span>
            </div>

            <div className="show-message">
              <div className="message-container">
                <input
                  type="text"
                  className="site-message"
                  placeholder="پیام برای نمایش در سایت....."
                />
                <input
                  type="text"
                  className="message-link"
                  placeholder="لینک پیام  "
                />

                <input
                  type="text"
                  className="button-text"
                  placeholder=" متن دکمه"
                />
                <label className="date-input">
                  تنظیم تاریخ پایداری اعلان
                  <span className="inputs">
                    <input type="time" value="22" />
                    <input type="date" value="1401-08-12" />
                  </span>
                </label>
              </div>
            </div>
            <div className="colors">
              <div className="colors-container">
                <label>
                  رنگ بک گراند
                  <input type="color" className="back-color" value="#DA8CFF" />
                </label>
                <label>
                   رنگ متن
                  <input type="color" className="text-color" value="#3C3E3C" />
                </label>
                <label>
                  رنگ زمینه دکمه
                  <input
                    type="color"
                    className="button-back-color"
                    value="#FF9393"
                  />
                </label>
                <label>
                  رنگ  متن دکمه
                  <input
                    type="color"
                    className="button-text-color"
                    value="#FFE601"
                  />
                </label>
              </div>
              <div className="confirm">
                <button>تنظیم اعلان</button>
              </div>
            </div>
          </>
        ) : (
          <Sms />
        )}
      </div>
    </div>
  );
};

const NotificationsReturn = () => {
  return (
    <>
      <AdminNav />
      <AdminSidebar />
      <Notifications />
    </>
  );
};

export default NotificationsReturn;
