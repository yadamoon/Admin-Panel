/* eslint-disable no-unused-vars */

import Chart from "../Layout/Chart";
import PieComponent from "../Layout/PieComponent";
import HeaderApp from "../SideBar/common/HeaderApp";
import { Progress, Space } from "antd";

const DashboardApp = () => {
  return (
    <div className="p-4  ">
      <div className=" rounded-lg dark:border-gray-700 ">
        {/* //todo dashboard */}
        <div className="flex  p-2 mb-4 rounded bg-gray-100">
          <p className="text-2xl text-gray-400 dark:text-gray-500">Dashboard</p>
        </div>

        {/* //todo list Earing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <div className="flex rounded bg-gray-50">
            {/* earing */}
            <div className="flex flex-col bg-white border border-t-4 border-t-blue-600 shadow-sm rounded-xl dark:border-t-blue-500 dark:shadow-slate-500/[.7]">
              <div className="p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  Card title
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a
                  className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  Card link
                  <svg
                    className="flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* another */}
          <div className="flex flex-col bg-white border border-t-4 border-t-blue-600 shadow-sm rounded-xl dark:border-t-blue-500 dark:shadow-slate-500/[.7]">
            <div className="p-4 md:p-5">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                Card title
              </h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a
                className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                Card link
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </div>
          </div>
          {/* another */}
          <div className="flex flex-col bg-white border border-t-4 border-t-blue-600 shadow-sm rounded-xl dark:border-t-blue-500 dark:shadow-slate-500/[.7]">
            <div className="p-4 md:p-5">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                Card title
              </h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a
                className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                Card link
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* //todo title chart */}
        <div className="flex p-2 mb-4 rounded bg-gray-100">
          <p className="text-2xl text-gray-400 ">Charts</p>
        </div>

        {/* //todo charts */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {/* Chart component */}
          <div className="frounded bg-white col-span-2">
            <p className="text-2xl text-gray-400 ">
              <Chart />
            </p>
          </div>

          <div className="flex items-center justify-center rounded bg-white col-span-2">
            <p className="text-2xl text-gray-400 ">
              <SpaceWrap />
            </p>
          </div>
          {/* Pie chart component */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {/* Chart component */}
          <div className=" rounded bg-white col-span-2">
            <p className="text-2xl text-gray-400 ">
              <ProgressBarApp />
            </p>
          </div>

          <div className="flex items-center justify-center rounded bg-white col-span-2">
            {/* <p className="text-2xl text-gray-400  "> */}
              <PieComponent />
            {/* </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardApp;

export const SpaceWrap = () => {
  return (
    <div className=" ">
      <div className=" ">
        <Space wrap>
          <Progress type="dashboard" percent={75} />
          <Progress type="dashboard" percent={70} status="exception" />
          <Progress type="circle" percent={100} />
        </Space>
      </div>
    </div>
  );
};

export const ProgressBarApp = () => {
  return (
    <div className="">
      <div className="">
        <Progress
          percent={30}
          className=""
          status="exception"
        />
        <Progress percent={60} className="" />
        <Progress percent={70} className=" " />
        <Progress percent={40} className=" " />
        <Progress percent={100} className=" " />
        <Progress
          percent={100}
          className=" "
          status="success"
        />
      </div>
    </div>
  );
};
