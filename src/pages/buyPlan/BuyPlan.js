import { Grid } from "@mui/material";
import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import PlanCard from "../../components/planCard/PlanCard";
import Sidebar from "../../components/sidebar/Sidebar";
import Support from "../../components/Support and Settings/Support";
import { server } from "../../server/server";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import "./buyplan.css";

const PlanPage = () => {
  return (
    <div className="planPage">
      <div className="planPage-grid__container">
        <Grid container className="planPage-grid">
          {server.map((item) => (
            <Grid item lg={4} md={6} xs={12}>
              <PlanCard key={item.id} item={item} />
            </Grid>
          ))}
        </Grid>
      </div>

      <div className="planPage-plan__swiper swiper-lazy-preloader">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          centeredSlidesBounds="true"
          modules={[Pagination]}
          grabCursor="true"
          className="mySwiper"
          breakpoints={{
            780: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            590: {
              slidesPerView: 1.5,
            },
            700: {
              slidesPerView: 1.8,
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

const BuyPlan = () => {
  return (
    <div>
      <Navbar />
      <Support />
      <Sidebar />
      <PlanPage />
      <Footer />
    </div>
  );
};

export default BuyPlan;
