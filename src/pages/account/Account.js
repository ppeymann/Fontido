import React from "react";

import "./Acount.css";

import planIcon from "../../assets/Vector 76.png";
import videoIcon from "../../assets/Group 8747.png";
import coverIcon from "../../assets/Group 8748.png";
import { Route, Routes } from "react-router-dom";
import Support from "../../components/Support and Settings/Support";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Grid } from "@mui/material";

const Account = () => {
  return (
    <div className="account">
      <Grid
        gap={1}
        justifyContent="space-evenly"
        mb={10}
        container
        className="acc-top"
      >
        <Grid item xs={12} md={3.5} className="acc-fullName acc-input">
          نام و نام خانوادگی:
        </Grid>
        <Grid item xs={12} md={3.5} className="acc-email acc-input">
          ایمیل شما:
        </Grid>
        <Grid item xs={12} md={3.5} className="acc-phoneNum acc-input">
          شماره همراه شما:
        </Grid>
      </Grid>
      <Grid
        gap={2}
        justifyContent="space-evenly"
        mb={10}
        container
        className="acc-bot"
      >
        <Grid item xs={12} md={3.5} className="acc-plan bot-item">
          <img src={planIcon} className="acc-img" />
          <span>پلن:</span>
        </Grid>
        <Grid item xs={12} md={3.5} className="acc-video bot-item">
          <img src={videoIcon} className="acc-img" />
          <span>ویدیو های باقی مانده:</span>
        </Grid>
        <Grid item xs={12} md={3.5} className="acc-cover bot-item">
          <img src={coverIcon} className="acc-img" />
          <span>کاور های باقی مانده:</span>
        </Grid>
      </Grid>
    </div>
  );
};

const Accounts = () => {
  return (
    <>
      <Navbar />
      <Support />
      <Sidebar />
      <Account />
      <Footer />
    </>
  );
};

export default Accounts;
