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

function App() {
  return (
    <div className="bg-gray-100 ">
      {/* //todo for small size */}
      <button
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      {/* //todo sidebar */}
      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <SideBar />
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <div className="   rounded-lg dark:border-gray-700 ">
          {/* //todo HeaderPart */}
          <div className=" mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500"></p>
            <HeaderApp />
          </div>

          <Routes>
            <Route path="/" element={<DashboardApp />} />
            <Route path="/Table" element={<ListUser />} />
            <Route path="/User" element={<Profiles />} />
            <Route path="/Inbox" element={<Inbox />} />
            <Route path="/Setting" element={<Settings />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/SignIN" element={<SignIn />} />
            <Route path="/Product" element={<Products />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
