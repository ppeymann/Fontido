import { Routes, Route } from "react-router-dom";
import "./App.css";
import Story from "./pages/story/Story";
import Register from "./components/register/Register";
import Home from "./pages/Home/Home.js";
import Video from "./pages/video/Video";
import SubPage from "./pages/sub/Sub";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/video" element={<Video />} />
        <Route path="/login" element={<Register />} />
        <Route path="/sub" element={<SubPage />} />
      </Routes>
    </div>
  );
}

export default App;
