import React from "react";
import Chart from "../Layout/Chart";
import PieComponent from "../Layout/PieComponent";
import HeaderApp from "../SideBar/common/HeaderApp";

const DashboardApp = () => {
  return (
    <div className="p-4 h-screen ">
      <div className=" rounded-lg dark:border-gray-700 ">
        {/* //todo dashboard */}
        <div className="flex  p-2 mb-4 rounded bg-gray-100">
          <p className="text-2xl text-gray-400 dark:text-gray-500">Dashboard</p>
        </div>

        {/* //todo list Earing */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex rounded bg-gray-50 ">
            {/* earing */}
            <div class="flex flex-col bg-white border border-t-4 border-t-blue-600 shadow-sm rounded-xl  dark:border-t-blue-500 dark:shadow-slate-500/[.7]">
              <div class="p-4 md:p-5">
                <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                  Card title
                </h3>
                <p class="mt-2 text-gray-500 dark:text-gray-400">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a
                  class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  Card link
                  <svg
                    class="flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* another */}
          <div className="flex  rounded bg-gray-50 ">
            <div class="flex flex-col bg-white border border-t-4 border-t-blue-600 shadow-sm rounded-xl   dark:border-t-blue-500 dark:shadow-slate-500/[.7]">
              <div class="p-4 md:p-5">
                <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                  Card title
                </h3>
                <p class="mt-2 text-gray-500 dark:text-gray-400">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a
                  class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  Card link
                  <svg
                    class="flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* another */}
          <div className="flex  rounded bg-gray-50 ">
            <div class="flex flex-col bg-white border border-t-4 border-t-blue-600 shadow-sm rounded-xl dark:border-t-blue-500 dark:shadow-slate-500/[.7]">
              <div class="p-4 md:p-5">
                <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                  Card title
                </h3>
                <p class="mt-2 text-gray-500 dark:text-gray-400">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a
                  class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  Card link
                  <svg
                    class="flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* //todo title chart */}
        <div className="flex p-2 mb-4 rounded bg-gray-100">
          <p className="text-2xl text-gray-400 dark:text-gray-500">Charts</p>
        </div>

        {/* //todo charts */}

        <div className="grid grid-cols-3 gap-4 mb-4">
          {/* //todo chart */}
          <div className="flex items-center justify-center rounded bg-white col-span-2">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              <Chart />
            </p>
          </div>
          {/*//todo  pie chart */}
          <div className="flex items-center justify-center rounded bg-white col-span-1">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              {" "}
              <PieComponent />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardApp;