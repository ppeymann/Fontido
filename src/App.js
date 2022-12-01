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
import NotificationsReturn from "./admin/adminaccount/Notifications";
import UsersReturn from "./admin/adminaccount/Users";
import Financial from "./admin/financial/Financial";
import AdminRoute from "./auth/adminRouth/AdminRoute";
import AdminSupp from "./admin/adminSupp/AdminSupp";
import { useUser } from "./auth/useUser/useUser";
import AdminSecu from "./admin/adminSecu/AdminSecu";
import ForgotUser from "./components/forgotUser/ForgotUser";
import OnlinePay from "./pages/onlinePayment/OnlinePay";
import Setting from "./pages/setting/Setting";

function App() {
  const user = useUser();

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              user.unique_name === "admin" ? (
                <NotificationsReturn />
              ) : (
                <Home />
              )
            ) : (
              <Home />
            )
          }
        />
        <Route
          path="story"
          element={
            <UserRoute>
              <Story />
            </UserRoute>
          }
        />
        <Route
          path="video"
          element={
            <UserRoute>
              <Video />
            </UserRoute>
          }
        />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot" element={<ForgotUser />} />
        <Route path="sub" element={<SubPage />} />
        <Route path={`onlinePayment?:`} element={<OnlinePay />} />
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
          <Route
            path="setting"
            element={
              <UserRoute>
                <Setting />
              </UserRoute>
            }
          />
        </Route>
        <Route path="admin">
          <Route path="login" element={<AdminLogin />} />
          <Route path="forget" element={<AdminForget />} />
          <Route
            path="notif"
            element={
              <AdminRoute>
                <NotificationsReturn />
              </AdminRoute>
            }
          />
          <Route
            path="user"
            element={
              <AdminRoute>
                <UsersReturn />
              </AdminRoute>
            }
          />
          <Route
            path="financial"
            element={
              <AdminRoute>
                <Financial />
              </AdminRoute>
            }
          />
          <Route
            path="support"
            element={
              <AdminRoute>
                <AdminSupp />
              </AdminRoute>
            }
          />
          <Route
            path="security"
            element={
              <AdminRoute>
                <AdminSecu />
              </AdminRoute>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
