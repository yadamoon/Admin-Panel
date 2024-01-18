import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import HeaderApp from "./components/SideBar/common/HeaderApp";
import { Routes, Route } from "react-router-dom";
import DashboardApp from "./components/pages/DashboardApp";
import ListUser from "./components/pages/ListUser";
import Profiles from "./components/pages/Profiles";
import Products from "./components/pages/Products";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import Settings from "./components/pages/Settings";
import Inbox from "./components/pages/Inbox";
import Error from "./components/pages/Error";
import ForgetPassword from "./components/pages/ForgetPassword";

function App() {

  return (
    <div className="bg-gray-100 w-full  ">
      {/* //!? sidebar */}
      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <SideBar />
        </div>
      </aside>

      <div className="p-4 sm:ml-64 h-full">
        <div className="rounded-lg dark:border-gray-700 ">
          {/* //!? HeaderPart */}
          <div className=" rounded bg-gray-50 dark:bg-gray-800">
            <HeaderApp />
          </div>
          <Routes
            className="lg:my-0 md:my-0 sm:my-5
          "
          >
            <Route path="/" element={<DashboardApp />} />
            <Route path="/Table" element={<ListUser />} />
            <Route path="/User" element={<Profiles />} />
            <Route path="/Inbox" element={<Inbox />} />
            <Route path="/Setting" element={<Settings />} />
            <Route path="/Product" element={<Products />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/SignIn" element={<SignIn />} />

            <Route path="/ForgetPassword" element={<ForgetPassword />} />

            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
