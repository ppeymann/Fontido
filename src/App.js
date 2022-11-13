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
import AdminLogin from "./admin/adminLogin/AdminLogin";
import AdminForget from "./admin/adminForgetPass/AdminForget";
import Login from "./components/login/Login";
import { UserRoute } from "./auth/userRoute/UserRoute";
import NotificationsReturn from "./pages/adminaccount/Notifications";
import UsersReturn from "./pages/adminaccount/Users";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="story" element={<Story />} />
        <Route path="video" element={<Video />} />
        <Route path="register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="sub" element={<SubPage />} />
        <Route path="account">
          <Route
            path="user"
            element={
              <UserRoute>
                <Account />
              </UserRoute>
            }
          />
          <Route
            path="purchace"
            element={
              <UserRoute>
                <PurchaceHistorys />
              </UserRoute>
            }
          />
          <Route
            path="freeVideocover"
            element={
              <UserRoute>
                <VideoCovers />
              </UserRoute>
            }
          />
          <Route
            path="supporting"
            element={
              <UserRoute>
                <Supporting />
              </UserRoute>
            }
          />
        </Route>
        <Route path="admin">
          <Route path="login" element={<AdminLogin />} />
          <Route path="forget" element={<AdminForget />} />
          <Route path="notif" element={<NotificationsReturn />} />
          <Route path="user" element={<UsersReturn />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
