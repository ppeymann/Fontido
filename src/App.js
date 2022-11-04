import { Routes, Route } from "react-router-dom";
import "./App.css";
import Story from "./pages/story/Story";
import Register from "./components/register/Register";
import Home from "./pages/Home/Home.js";
import Video from "./pages/video/Video";
import SubPage from "./pages/sub/Sub";
import Account from "./pages/account/Account";
import PurchaceHistorys from "./pages/purchase history/PurchaceHistory";
import VideoCovers from "./pages/videocover/VideoCover";
import Supporting from "./pages/supporting/Supporting";
import Notif from "./admin/notif/Notif";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="story" element={<Story />} />
        <Route path="video" element={<Video />} />
        <Route path="login" element={<Register />} />
        <Route path="sub" element={<SubPage />} />
        <Route path="account">
          <Route path="user" element={<Account />} />
          <Route path="purchace" element={<PurchaceHistorys />} />
          <Route path="freeVideocover" element={<VideoCovers />} />
          <Route path="supporting" element={<Supporting />} />
        </Route>
        <Route path="admin">
          <Route path="notif" element={<Notif />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
