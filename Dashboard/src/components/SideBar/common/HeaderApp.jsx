import React, { useState } from "react";
import Chart from "../../Layout/Chart";
import { Link } from "react-router-dom";

export default function HeaderApp() {
  const [searchInput, setSearchInput] = useState(true);
  const [mdOptionsToggle, setMdOptionsToggle] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className=" 2xl:mx-auto">
      <div className="bg-white  shadow-lg py-5 px-7">
        <nav className="flex justify-between">
          <div className="flex justify-center items-center "></div>
          <div className="flex justify-center items-center">
            <input
              className="text-gray-600 dark:text-gray-400 font-normal w-96 h-10 flex items-center pl-3 text-sm border-gray-300 bg-gray-200 rounded border shadow"
              placeholder="Search"
            />
          </div>
          <div className=" flex space-x-5 justify-center items-center pl-2">
            <img
              src="public/feveb.jpg"
              alt="profile"
              className="cursor-pointer  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 rounded-full"
              width={40}
              height={44}
            />
          </div>
        </nav>
      </div>
    </div>
  );
}
