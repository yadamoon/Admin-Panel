/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./App.css";
import SideBar from "./SideBar/SideBar";
import HeaderApp from "./SideBar/common/HeaderApp";
import { Navigate, Route, Routes  } from "react-router-dom";
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
import ProtectedRoute from "./controller/ProtectedRoute";
// import Route from "./controller/ProtectedRoute";


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
    <div className="overflow-hidden hover:overflow-auto">
      {/* Sidebar */}
      <aside>
      <SideBar/>
      </aside>

      <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ overflow: showScroll ? 'auto' : 'hidden' }}
      >
        <div className="p-4 sm:ml-64 h-full">
          <div className="rounded-lg dark:border-gray-700">
            <div className="rounded bg-gray-50 dark:bg-gray-800">
              <HeaderApp />
            </div>
            
            <Routes >
              <Route path="/"  element={<LandingPage />}  />
              <Route path="/dashboard" element={<ProtectedRoute element={<DashboardApp /> } roles={["admin","user"]}  />} />
              <Route path="/Table" element={<ProtectedRoute element={<ListUser />} roles={["admin"]} />} />
              <Route path="/User" element={<ProtectedRoute element={<Profiles />}  roles={["admin","user"]} />} />
              <Route path="/DetailsUser/:id" element={<ProtectedRoute element={<DetailsUsers />}  roles={["admin","user"]} />} />
              <Route path="/Inbox" element={<ProtectedRoute element={<Inbox />}  roles={["admin","user"]} />} />
              <Route path="/Setting" element={<ProtectedRoute element={<Settings /> } roles={["admin","user"]} />} />
              <Route path="/Product" element={<ProtectedRoute element={<Products />} roles={["admin","user"]} />} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/SignIn" element={<SignIn />} />
              <Route path="/ForgetPassword" element={<ForgetPassword />} />
              <Route path="*" element={<Error />} />
            </Routes>
         </div>
        </div>
      </div>
    </div>
  );
}

export default App;

