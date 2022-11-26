import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { server } from "../../server/server";
import Sidebar from "../../components/sidebar/Sidebar";
import Support from "../../components/Support and Settings/Support";
import "../purchase history/PurchaseHistory.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useToken } from "../../auth/useToken/useToken";
import axios from "axios";
import { Helmet } from "react-helmet";

const PurchaceHistory = () => {
  const [token] = useToken();
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://amirhosseinkarami.ir/api/UserPanel/GetPlanPurchasesHistory",
        {
          headers: { authorization: `Bearer ${token}` },
        }
      )
      .then((res) => setData(res.data))
      .then(console.log(data));
  }, []);

  let info = server;
  return (
    <div className="PurchaceHistory">
      <Helmet>
        <title>تاریخچه خرید</title>
      </Helmet>
      {info.map((item) => (
        <Grid container className="ph-container" gap={2}>
          <Grid className="clm" item>
            <Grid item className="clm-item">
              {item.title}
            </Grid>
          </Grid>

          <Grid className="clm clm_respon" item>
            <Grid>{item.video}</Grid>
          </Grid>

          <Grid className="clm clm_respon" item>
            <Grid>{item.image}</Grid>
          </Grid>

          <Grid className="clm " item>
            <Grid>{item.date}</Grid>
          </Grid>

          <Grid className="clm clm_respon" item>
            <Grid>{item.time}</Grid>
          </Grid>

          <Grid className="clm" item>
            <Grid>{item.price}تومان</Grid>
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

const PurchaceHistorys = () => {
  return (
    <>
      <Navbar />
      <Support />
      <Sidebar />
      <PurchaceHistory />
      <Footer />
    </>
  );
};

export default PurchaceHistorys;
