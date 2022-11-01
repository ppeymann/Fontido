import React from "react";
import { Grid } from "@mui/material";
import { server } from "../../server/server";
import Sidebar from "../../components/sidebar/Sidebar";
import Support from "../../components/Support and Settings/Support";
import "../purchase history/PurchaseHistory.css";

const PurchaceHistory = () => {
  let info = server;
  console.log(info);
  return (
    <div className="PurchaceHistory">
      {info.map((item) => (
        <Grid
          container
          className="ph-container"
          gap={2}
          justifyContent="space-between"
        >
          <Grid className="clm" item>
            <Grid item className="clm-item">
              {item.title}
            </Grid>
          </Grid>

          <Grid className="clm" item>
            <Grid>{item.video}</Grid>
          </Grid>

          <Grid className="clm" item>
            <Grid>{item.image}</Grid>
          </Grid>

          <Grid className="clm" item>
            <Grid>{item.date}</Grid>
          </Grid>

          <Grid className="clm" item>
            <Grid>{item.time}</Grid>
          </Grid>

          <Grid className="clm" item>
            <Grid>{item.price}</Grid>
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

const PurchaceHistorys = () => {
  return (
    <>
      <Support />
      <Sidebar />
      <PurchaceHistory />
    </>
  );
};

export default PurchaceHistorys;
