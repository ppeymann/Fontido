import React from "react";
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";
import "./AdminSidebar.css";

const AdminSidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className="sidebar">
      <div className="side-container">
        <div className="side-menu">
          <ul className="side-menu-list">
            <li className="side-item">
              <Link
                to="/admin/notif"
                className={pathname === "/admin/notif" ? "click" : ""}
              >
                <p>اعلانات</p>
              </Link>
            </li>

            <li className="side-item">
              <Link
                to="/admin/user"
                className={pathname === "/admin/user" ? "click" : ""}
              >
                <p>کاربران</p>
              </Link>
            </li>
            <li className="side-item">
              <Link
                to="/admin/financial"
                className={pathname === "/admin/financial" ? "click" : ""}
              >
                <p>مالی</p>
              </Link>
            </li>
            <li className="side-item">
              <Link
                to="/admin/support"
                className={pathname === "/admin/support" ? "click" : ""}
              >
                <p>پشتیبانی</p>
              </Link>
            </li>
            <li className="side-item">
              <Link
                to="/admin/security"
                className={pathname === "/admin/security" ? "click" : ""}
              >
                <p>امنیت</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
