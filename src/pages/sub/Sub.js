import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import subImg from "../../assets/sub-image.png";
import "./sub.css";
import { server } from "../../server/server";
import PlanCard from "../../components/planCard/PlanCard";
import Footer from "../../components/footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

//sub body

const Sub = () => {
  return (
    <div className="sub">
      <div className="sub-top">
        <img src={subImg} alt="sub-image" className="sub-img" />
        <div className="sub-top__text">
          <h4 className="sub-top__title">
            کمترین هزینه <span>بهترین</span> محتوا
          </h4>
          <p>پلن های اقتصادی برای تمام ایرانیان </p>
          <p>اولین سیستم محتوا ساز با تمام امکانات </p>
          <p>بدون محدودیت با کمترین هزینه اشتراک </p>
          <p>ماهانه تا سالیانه ، همیشه بهترین باشید</p>
        </div>
      </div>
      <div className="sub-plan__desc">
        {server.map((item) => (
          <PlanCard key={item.id} item={item} />
        ))}
      </div>
      <div className="sub-plan__swiper swiper-lazy-preloader">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            700: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
          }}
          loop={Infinity}
        >
          {server.map((item) => (
            <SwiperSlide>
              <PlanCard key={item.id} item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

//sub page

const SubPage = () => {
  return (
    <>
      <Navbar />
      <Sub />
      <Footer />
    </>
  );
};

export default SubPage;
