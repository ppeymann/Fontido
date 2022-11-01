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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/video" element={<Video />} />
        <Route path="/login" element={<Register />} />
        <Route path="/sub" element={<SubPage />} />
        <Route path="/account" element={<Account />} />
        <Route path="/PurchaceHistory" element={<PurchaceHistorys />} />
        <Route path="/freevc" element={<VideoCovers />} />
      </Routes>
    </div>
  );
}

export default App;
