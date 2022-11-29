import React, { useEffect, useState } from "react";

import "./Acount.css";

import { useUser } from "../../auth/useUser/useUser";
import { useToken } from "../../auth/useToken/useToken";

import planIcon from "../../assets/Vector 76.png";
import videoIcon from "../../assets/Group 8747.png";
import coverIcon from "../../assets/Group 8748.png";
import axios from "axios";
import Support from "../../components/Support and Settings/Support";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Grid } from "@mui/material";
import { Helmet } from "react-helmet";

const Account = () => {
  const user = useUser();
  const [token, setToken] = useToken();
  const [data, setData] = useState({});

  useEffect(() => {
    const res = axios
      .get("https://amirhosseinkarami.ir/api/UserPanel/GetUserInformation", {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="account">
      <Helmet>
        <title>حساب کاربری</title>
      </Helmet>
      <Grid
        gap={0.5}
        justifyContent="space-evenly"
        mb={10}
        container
        className="acc-top"
      >
        <Grid item xs={12} md={3.5} className="acc-fullName acc-input">
          نام و نام خانوادگی:{data.userName ? ` ${data.userName}` : ""}
        </Grid>
        <Grid item xs={12} md={3.5} className="acc-phoneNum acc-input">
          شماره همراه : {data.mobilePhone ? `    ${data.mobilePhone}` : ""}
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
