import React, { useState } from "react";
import "./supporting.css";
// ----- components ------
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Support from "../../components/Support and Settings/Support";
import Sidebar from "../../components/sidebar/Sidebar";
import { Grid } from "@mui/material";
import { Helmet } from "react-helmet";

const Sup = () => {
  const [active, setActive] = useState(true);
  return (
    <div className="sup">
      <Helmet>
        <title>پشتیبانی</title>
      </Helmet>
      <Grid
        container
        className="sup-inputs"
        display="flex"
        flexDirection="column"
        gap={1}
      >
        <Grid item xs={12}>
          <input
            type="text"
            className="sup-inputs__input topic"
            placeholder="موضوع"
          />
        </Grid>
        <Grid item xs={12}>
          <input
            type="text"
            className="sup-inputs__input"
            placeholder="متن پیام "
          />
        </Grid>
        <Grid item xs={12}>
          <button className="sup-inputs__btn">ارسال به پشتیبانی</button>
        </Grid>
      </Grid>
      <Grid container mt={20} className="answer">
        <Grid item xs={6} className="sup-name">
          امیر حسین کرمی
        </Grid>
        <Grid
          item
          xs={6}
          className="sup-title "
          onClick={() => setActive(!active)}
        >
          پاسخ پیام
        </Grid>
      </Grid>
      <Grid
        container
        mt={5}
        px={10}
        className={`answer ${
          active == true ? "answer-text__active" : "answer-text"
        }`}
      >
        <Grid item xs={12}>
          با سلام و خسته نباشید خدمت شما بنده اشتراک 3 ماهه رو تهیه کردم .و در
          حال حاظر اجازه استفاده از این پلن رو ندارم و نمیتونم ار خدماتش استفاده
          کنم
        </Grid>
      </Grid>
    </div>
  );
};

const Supporting = () => {
  return (
    <>
      <Navbar />
      <Support />
      <Sidebar />
      <Sup />
      <Footer />
    </>
  );
};

export default Supporting;
