import { Divider } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet";
import AdminNav from "../../components/adminNav/AdminNav";
import AdminSidebar from "../../components/adminSidebar/AdminSidebar";

import "./financial.css";

const FinancialMain = () => {
  const info = [
    { planId: 1, planName: "1 ماهه", price: 200000 },
    { planId: 1, planName: "3 ماهه", price: 600000 },
    { planId: 1, planName: "6 ماهه", price: 1200000 },
  ];
  return (
    <div className="financial">
      <Helmet>
        <title>ادمین | مالی</title>
      </Helmet>
      <div className="financial-container">
        {info.map((item) => (
          <>
            <div className="plan-container">
              <div className="item-plan__name">پلن:{item.planName}</div>
              <div className="item-plan__price">{item.price} تومان</div>
            </div>
            <Divider variant="middle" />
          </>
        ))}
      </div>
      <div className="allPrice"> درآمد خالص: 560000 تومان </div>
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
