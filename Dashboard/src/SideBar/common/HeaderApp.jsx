/* eslint-disable no-unused-vars */

import { useState } from "react";
import { Link } from "react-router-dom";
import { setHide, setShow } from '../../store/Slice/authSlice'
import { useSelector } from "react-redux";
export default function IndexPage() {
  const [show, setShow] = useState(null);
  const [profile, setProfile] = useState(false);
  const signedIn  = useSelector(state => state.user);
 
  // eslint-disable-next-line no-unused-vars
  const listNav = [
    { name: "Dashboard", icon: "" },
    { name: "Table", icon: "" },
    { name: "Inbox", icon: "" },
    { name: "User", icon: "" },
    { name: "Product", icon: "" },
    { name: "Settings", icon: "" },
    { name: "SignIn", icon: "" },
    { name: "SignUp", icon: "" },
  ];

  return (
    <>
      <div className="left-0 h-full w-full">
        {/* Code block starts */}
        <nav className="bg-white shadow xl:block hidden p-4 ">
          <div className="mx-auto container px-6 py-2 xl:py-0">
            <div className="flex items-end justify-end">
              {/* //!? button of signIn and SignUp */}
              <div className="">
                <div className=" grid grid-cols-2 gap-2 text-center mx-3 ">
                {!signedIn && (
                  <Link
                    to="/SignIn"
                    className="inline-block  bg-blue-500 text-white border rounded-lg  p-2 pl-5 pr-5  text-sm font-medium uppercase hover:opacity-75 hover:text-white"
                  >
                    SignIn
                  </Link>
 )}
                {!signedIn && (
                  <Link
                    to="/SignUp"
                    className="inline-block  bg-blue-500 text-white border rounded-lg  p-2 pl-5 pr-5  text-sm font-medium uppercase hover:opacity-75 hover:text-white"
                  >
                    SignUp
                  </Link>
 )}  </div>
              </div>

              <div className="inset-y-0 left-0 flex items-end xl:hidden">
                <div className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-100 focus:outline-none transition duration-150 ease-in-out">
                  <div className="visible xl:hidden">
                    <ul className="p-2 border-r bg-white absolute rounded left-0 right-0 shadow mt-8 md:mt-8 hidden">
                      <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                        <div className="flex items-center">
                          <p className="text-sm ml-2 cursor-pointer">Ya Red</p>
                          <div className="sm:ml-2 text-white relative">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-chevron-down cursor-pointer"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </div>
                        </div>
                      </li>
                      <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-user"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx={12} cy={7} r={4} />
                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                          </svg>
                          <span className="ml-2">Profile</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="hidden close-m-menu text-gray-700"
                    onClick="MenuHandler(this,false)"
                  ></div>
                </div>
              </div>

              <div className="flex ">
                <div className="hidden xl:flex  justify-end items-end ">
                  <div className="">
                    <div
                      className="flex   items-center relative  "
                      onClick={() => setProfile(!profile)}
                    >
                      {profile && (
                        <ul className="p-2 w-32 border-r bg-white absolute rounded  shadow top-0 mt-16 ">
                          <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                            <div className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-user"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx={12} cy={7} r={4} />
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                              </svg>
                              <span className="ml-2">My Profile</span>
                            </div>
                          </li>
                          <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-help"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <circle cx={12} cy={12} r={9} />
                              <line x1={12} y1={17} x2={12} y2="17.01" />
                              <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                            </svg>
                            <span className="ml-2">Help Center</span>
                          </li>
                          <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-settings"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                              <circle cx={12} cy={12} r={3} />
                            </svg>
                            <span className="ml-2"> Settings</span>
                          </li>
                        </ul>
                      )}
                      <div className=" flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out">
                        <img
                          className="rounded-full h-10 w-10 object-cover float-right"
                          src="https://avatars.githubusercontent.com/u/128363342?v=4"
                          alt="logo"
                        />
                      </div>
                      <div className="ml-2 text-gray-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-chevron-down cursor-pointer"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <nav className=" bg-white ">
          <div className="py-4 px-6 w-full flex xl:hidden justify-between items-start bg-white fixed top-0 left-0 z-40 ">
            <div className="w-24">Admin Panel</div>
            <div className="flex items-center">
              <div
                id="menu"
                className="text-gray-800"
                onClick={() => setShow(!show)}
              >
                {show ? (
                  ""
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-menu-2"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1={4} y1={6} x2={20} y2={6} />
                    <line x1={4} y1={12} x2={20} y2={12} />
                    <line x1={4} y1={18} x2={20} y2={18} />
                  </svg>
                )}
              </div>
            </div>
          </div>
          
          {/*Mobile responsive sidebar*/}
          <div
            className={
              show
                ? "w-full xl:hidden h-full absolute z-40  transform  translate-x-0 top-0 left-0"
                : "   w-full xl:hidden h-full absolute z-40  transform -translate-x-[100%] "
            }
          >
            <div
              className=" opacity-50 w-full h-full"
              onClick={() => setShow(!show)}
            />
            <div className="w-60  z-40 fixed overflow-y-auto  top-0 left-0 bg-white shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
              <div className="px-6 h-full">
                <div className="flex flex-col justify-between h-full w-full">
                  <div>
                    <div className="mt-6 flex w-full items-center justify-between">
                      <div className="flex items-center justify-between w-full space-x-32">
                        <div className="flex items-center">
                          <div className="">
                            <div className="w-full flex items-center justify-between pt-1">
                              <div className="flex items-center">
                                <img
                                  alt="profile-pic"
                                  src="https://avatars.githubusercontent.com/u/128363342?v=4"
                                  className="rounded-md"
                                  width={500}
                                />
                                <p className=" text-gray-800 text-base leading-4 ml-2">
                                  Ya Red
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="cross"
                          className="text-gray-800 w-full"
                          onClick={() => setShow(!show)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-x"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <ul className="my-6 ">
                      {/*//!? search */}
                      <div className="relative w-full">
                        <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-search"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            strokeWidth={1}
                            stroke="#A0AEC0"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx={10} cy={10} r={7} />
                            <line x1={21} y1={21} x2={15} y2={15} />
                          </svg>
                        </div>
                        <input
                          className="bg-gray-100 focus:outline-none rounded w-full text-sm text-gray-500  pl-10 py-2"
                          type="text"
                          placeholder="Search"
                        />
                      </div>
                      <Link to="/" className="cursor-pointer">
                        <li className="text-gray-800 pt-10">
                          <div className="flex items-center">
                            <div className="w-6 h-6 md:w-8 md:h-8 text-indigo-700">
                              <svg
                                className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 21"
                              >
                                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                              </svg>
                            </div>
                            <p className="text-indigo-700 xl:text-base text-base ml-3">
                              Dashboard
                            </p>
                          </div>
                        </li>
                      </Link>
                      <Link to="/Table" className="cursor-pointer">
                        <li className="text-gray-800 pt-10">
                          <div className="flex items-center">
                            <div className="w-6 h-6 md:w-8 md:h-8 text-indigo-700">
                              <i className="fa fa-table"></i>
                            </div>
                            <p className="text-indigo-700 xl:text-base text-base ml-3">
                              Table
                            </p>
                          </div>
                        </li>
                      </Link>

                      <Link to="/Inbox" className="cursor-pointer">
                        <li className="text-gray-800 pt-10">
                          <div className="flex items-center">
                            <div className="w-6 h-6 md:w-8 md:h-8 text-indigo-700">
                              <i className="fa fa-inbox"></i>
                            </div>
                            <p className="text-indigo-700 xl:text-base text-base ml-3">
                              Inbox
                            </p>
                          </div>
                        </li>
                      </Link>
                      <Link to="/User" className="cursor-pointer">
                        <li className="text-gray-800 pt-10">
                          <div className="flex items-center">
                            <div className="w-6 h-6 md:w-8 md:h-8 text-indigo-700">
                              <i className="fa fa-user"></i>
                            </div>
                            <p className="text-indigo-700 xl:text-base text-base ml-3">
                              User
                            </p>
                          </div>
                        </li>
                      </Link>
                      <Link to="/Product" className="cursor-pointer">
                        <li className="text-gray-800 pt-8">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                                <svg
                                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-500"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 18 20"
                                >
                                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                                </svg>
                              </div>
                              <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">
                                Product
                              </p>
                            </div>
                          </div>
                        </li>
                      </Link>

                      <a className="cursor-pointer">
                        <li className="text-gray-800 pt-8">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                                <i className="fa fa-gears"></i>
                              </div>
                              <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">
                                Settings
                              </p>
                            </div>
                          </div>
                        </li>
                      </a>

                      <Link to="/SignIn" className="cursor-pointer">
                        <li className="text-gray-800 pt-8">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                                <svg
                                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-500"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 18 16"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                                  />
                                </svg>
                              </div>
                              <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">
                                SignIn
                              </p>
                            </div>
                          </div>
                        </li>
                      </Link>
                      <Link to="SignUp" className="cursor-pointer">
                        <li className="text-gray-800 pt-8">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                                <svg
                                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-500"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                                </svg>
                              </div>
                              <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">
                                SignUp
                              </p>
                            </div>
                          </div>
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div className="w-full pt-4">
                    <div className="flex justify-center mb-4 w-full">
                   
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* Code block ends */}
      </div>
    </>
  );
}



