/* eslint-disable no-unused-vars */
import "./App.css";
import SideBar from "./SideBar/SideBar";
import HeaderApp from "./SideBar/common/HeaderApp";
import { Route, Routes  } from "react-router-dom";
import DashboardApp from "./pages/DashboardApp";
import ListUser from "./pages/ListUser";
import Profiles from "./pages/Profiles";
import Products from "./pages/Products";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Settings from "./pages/Settings";
import Inbox from "./pages/Inbox";
import Error from "./pages/Error";
import ForgetPassword from "./pages/ForgetPassword";
import LandingPage from "./pages/LandingPage";
import DetailsUsers from "./Layout/DetailsUsers";
import { useSelector } from "react-redux";
import { useState } from "react";
import PrivateRoute from "./controller/ProtectedRoute";


function App() {
  const { signedIn } = useSelector((state) => state.auth) || {};
  const [showScroll, setShowScroll] = useState(false);

  const handleMouseEnter = () => {
    setShowScroll(true);
  };

  const handleMouseLeave = () => {
    setShowScroll(false);
  };

  return (
    <div>
      {/* Sidebar */}
      <aside>
        {/* Sidebar content */}
      </aside>

      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ overflow: showScroll ? 'auto' : 'hidden' }}
      >
        <div className="p-4 sm:ml-64 h-full">
          <div className="rounded-lg dark:border-gray-700">
            {/* HeaderPart */}
            <div className="rounded bg-gray-50 dark:bg-gray-800">
              <HeaderApp />
            </div>
            <Routes>
          
  <Route path="/" element={<LandingPage />} />
  <PrivateRoute path="/dashboard" element={<DashboardApp />} />

</Routes>
            {/* <Routes>
            <Route path="/" element={<LandingPage />} />
            <ProtectedRoute path="/dashboard" element={<DashboardApp />}  /> */}
           
              {/* <ProtectedRoute path="/Table" element={<ProtectedRoute element={<ListUser />} />} />
              <ProtectedRoute path="/User" element={<ProtectedRoute element={<Profiles />} />} />
              <ProtectedRoute path="/DetailsUser/:id" element={<ProtectedRoute element={<DetailsUsers /> }/>} />
              <ProtectedRoute path="/Inbox" element={<ProtectedRoute element={<Inbox />}/>} />
              <ProtectedRoute path="/Setting" element={<ProtectedRoute element={<Settings />} />} />
              <ProtectedRoute path="/Product" element={ <ProtectedRoute ProtectedRoute element={<Products />}/>} />
              <ProtectedRoute path="/SignUp" element={<ProtectedRoute element={<SignUp />} />} />
              <ProtectedRoute path="/SignIn" element={<ProtectedRoute element={<SignIn />} />} />
             
              <ProtectedRoute path="/ForgetPassword" element={<ProtectedRoute element={<ForgetPassword />} /> }/>
              <ProtectedRoute path="*" element={<ProtectedRoute element={<Error />} />} />  */}
            {/* </Routes> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;