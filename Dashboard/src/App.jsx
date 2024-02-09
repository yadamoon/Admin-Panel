/* eslint-disable no-unused-vars */
import "./App.css";
import SideBar from "./SideBar/SideBar";
import HeaderApp from "./SideBar/common/HeaderApp";
import { Routes, Route } from "react-router-dom";
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

function App() {
  const { signedIn } = useSelector((state) => state.auth) || {};

 return (
    <div className="bg-white w-full  ">
      {/* //!? sidebar */}
      {signedIn && 
      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 "
        aria-label="Sidebar"
      >
        <div className="h-full border   w-full px-3 py-4 overflow-y-auto bg-gray-500 ">
          <SideBar />
        </div>
      </aside>
      }

      <div className="p-4 sm:ml-64 h-full ">
        <div className="rounded-lg dark:border-gray-700 ">
          {/* //!? HeaderPart */}
          <div className=" rounded bg-gray-50 dark:bg-gray-800">
            <HeaderApp />
          </div>
          
          <Routes
            className="lg:my-0 md:my-0 sm:my-5
          "
          >
            <Route path="/Dashboard" element={<DashboardApp />} />
            <Route path="/Table" element={<ListUser />} />
            <Route path="/User" element={<Profiles />} />
            <Route path="DetailsUser/:id" element={<DetailsUsers />} />
            <Route path="/Inbox" element={<Inbox />} />
            <Route path="/Setting" element={<Settings />} />
            <Route path="/Product" element={<Products />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/" element={<LandingPage />} />
           
            <Route path="/ForgetPassword" element={<ForgetPassword />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
