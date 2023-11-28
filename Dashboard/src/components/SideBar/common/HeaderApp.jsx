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
          <div className=" flex justify-center items-center relative   w-1/3">
            <input
              className="text-sm leading-none text-left text-gray-600 px-4 py-3 w-full border rounded border-gray-300  outline-none"
              type="text"
              placeholder="Search"
            />
            <svg
              className="absolute right-3 z-10 cursor-pointer"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
                stroke="#4B5563"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 21L15 15"
                stroke="#4B5563"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
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
