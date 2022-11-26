import React from "react";
import "./homePage.css";
import Navbar from "../../components/navbar/Navbar";
import topImg from "../../assets/Group 37.png";
import midImg from "../../assets/ابعاد سایز های یک سایت.png";
import botImg from "../../assets/صفحه اصلی پایین.png";
import Footer from "../../components/footer/Footer";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <div className="home-page">
      <Helmet>
        <title>فونتیدو</title>
      </Helmet>
      <h1 className="home-page__title">
        <span className="title-green"> ساخت </span>استوری،کاور برای تمام شبکه
        های مجازی تمام پلتفورم ها در تمام ابعاد
      </h1>
      <div className="home-page__topImg">
        <img className="top-img" src={topImg} alt="top-image" />
      </div>
      <div className="home-page__midImg">
        <img className="mid-img" src={midImg} alt="mid-image" />
      </div>
      <div className="home-page__bot">
        <img src={botImg} alt="" className="bot-img" />
        <div className="bot-text">
          <h4>
            ویرایش <span>ویدیو</span> به سبکی جدید
          </h4>
          <p>ایجاد افکت ها ، المان های جدید</p>
          <p>ایجاد کیفیت های مختلف و متفاوت</p>
          <p> رنگ بندی ها و دیزاین های متنوع</p>
          <p>تمپلیت های جدید و زیبا</p>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
};

export default Home;
