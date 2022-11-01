import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Support from "../../components/Support and Settings/Support";
import "../videocover/videocover.css";

const VideoCover = () => {
  return (
    <div className="videocover">
      <div className="vc-container">
        <div className="top-clm ">
          <p>
            توجه داشته باشید ، در صورت دعوت هر شخص در فونتیدو بعد از اولین تهیه
            اشترک توسط دعوت شده، به شما 3 ویدیو و 3 تصویر هدیه داده خواهد شد و
            پلن شما به این رقم بابت هر شخص که توسط شما دعوت شده باشد و اشتراک
            تهیه کند شارژ خواهد شد
          </p>
        </div>
        <div className="middle-clm ">
          <p>دعوت شده ها:</p>
          <p>دارای اشتراک:</p>
          <p>هدیه شما :</p>
        </div>
        <div className="bottom-clm ">
          <p>لینک دعوت : Https://Fontido.ir/4751255</p>
        </div>
      </div>
    </div>
  );
};

const VideoCovers = () => {
  return (
    <>
      <Support />
      <Sidebar />
      <VideoCover />
    </>
  );
};

export default VideoCovers;
