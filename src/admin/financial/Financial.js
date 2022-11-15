import React from "react";
import AdminNav from "../../components/adminNav/AdminNav";
import AdminSidebar from "../../components/adminSidebar/AdminSidebar";

import "./financial.css";

const FinancialMain = () => {
  return (
    <div className="financial">
      <h1></h1>
    </div>
  );
};

const Financial = () => {
  return (
    <>
      <AdminNav />
      <AdminSidebar />
      <FinancialMain />
    </>
  );
};

export default Financial;
