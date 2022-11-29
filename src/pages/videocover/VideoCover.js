import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useToken } from "../../auth/useToken/useToken";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Support from "../../components/Support and Settings/Support";
import "../videocover/videocover.css";

const VideoCover = () => {
  const [data, setData] = useState("");
  const [user, setUser] = useState(0);
  const [token] = useToken();
  const url = "https://amirhosseinkarami.ir";
  useEffect(() => {
    axios
      .get(url + "/api/UserPanel/GetInviteCode", {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => setData(res.data));
    axios
      .get(url + "/api/UserPanel/GetNumberOfPeopleInvitedByTheUser", {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => setUser(res.data));
  }, []);

  return (
    <div className="videocover">
      <Helmet>
        <title>کاور رایگان</title>
      </Helmet>
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
          <p>دعوت شده ها : {user}</p>
          <p>دارای اشتراک:</p>
          <p>هدیه شما :</p>
        </div>
        <div className="bottom-clm ">
          <p>کد دعوت: {data}</p>
        </div>
      </div>
    </div>
  );
};

const VideoCovers = () => {
  return (
    <>
      <Navbar />
      <Support />
      <Sidebar />
      <VideoCover />
      <Footer />
    </>
  );
};

export default VideoCovers;
