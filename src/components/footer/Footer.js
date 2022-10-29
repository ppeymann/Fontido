import React from "react";
import { Grid } from "@mui/material";
import rightImg from "../../assets/eNamad-logo-featured 1.png";
import leftImg from "../../assets/zplogo 1.png";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      s
      <Grid container>
        <Grid item xs={12} lg={6}>
          <h3 className="footer-right__title">درباره فونتیدو</h3>
          <p className="footer-right__text">
            فونتیدو سیستم تولید محتوا با بهترین کیفیت برای تمام پلتفورم ها و
            شبکه های اجتماعی است ، با فونتیدو میتوان تمام هر آن چیزی که نیاز
            دارید را بسازید با بهترین کیفیت و بهترین محتوا
          </p>
        </Grid>
        <Grid item xs={12} lg={4} className="footer-left">
          <h3 className="footer-left__title">نماد اعتماد و درگاه پرداخت</h3>
          <div className="footer-left__img">
            <img className="img-R" src={rightImg} alt="image-right" />
            <img className="img-L" src={leftImg} alt="image-left" />
          </div>
        </Grid>
      </Grid>
      <div className="copy-right">
        تمام حقوق مادی و معنوی متعلق به سایت فونتیدو است ، و هر گونه کپی برداری
        از سایت پیگیری قانونی همراه دراد
      </div>
    </div>
  );
};

export default Footer;
