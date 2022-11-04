import React from "react";
import AdminNav from "../../components/adminNav/AdminNav";
import AdminSidebar from "../../components/adminSidebar/AdminSidebar";
import "./notif.css";

const Notific = () => {
  return <div className="notif">Notif</div>;
};

const Notif = () => {
  return (
    <div>
      <AdminNav />
      <AdminSidebar />
      <Notific />
    </div>
  );
};

export default Notif;
