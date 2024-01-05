import React, { useState } from "react";
import { Form, useForm } from "react-hook-form";

const ForgetPassword = () => {
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, watch },
    reset,
  } = useForm();

  const ClickEmail = () => {
    setShow(true);
  };
  const handleClick = ({ email }) => {
    console.log(email);
  };
  return (
    <div>
      {/* //!? continer  */}
      {!show && (
        <section className="">
          <div className="flex flex-col items-center   mx-auto md:h-screen lg:py-20">
            <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md  sm:p-8">
              <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Recover Account
              </h2>
              <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900  "
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Please Enter Correct Email!",
                      pattern: {
                        value: /[@]/,
                        message: "Enter at least one special character",
                      },
                      minLength: {
                        value: 2,
                        message: "Please Enter atleast more than 2 character",
                      },
                      maxLength: {
                        value: 32,
                        message: "Please Enter atleast less than 15 character",
                      },
                    })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 "
                    placeholder="name@company.com"
                    required=""
                  />
                  {errors.email && (
                    <span className="text-red-700 col-span-1 md:col-span-2 ">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <button
                  onClick={handleSubmit(handleClick)}
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
                >
                  Reset passwod
                </button>
              </form>
            </div>
          </div>
        </section>
      )}
      {show && <CreateNewPassword />}
    </div>
  );
};

export default ForgetPassword;

export const CreateNewPassword = () => {
  return (
    <div className="">
      <section className="">
        <div className="flex flex-col items-center   mx-auto md:h-screen lg:py-20 sm:0">
          <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md  sm:p-8">
            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Recover Account
            </h2>
            <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  New Password
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Please Enter New Password!",
                    minLength: {
                      value: 8,
                      message: "min Length 8",
                      maxLength: {
                        value: 12,
                        message: "max Length are 12",
                      },
                    },
                  })}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 "
                  required=""
                />
              </div>
              <div>
                <label
                  for="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Confirm password
                </label>
                <input
                  type="confirm-password"
                  {...register("password", {
                    required: "Please Enter New Password!",
                    minLength: {
                      value: 8,
                      message: "min Length 8",
                      maxLength: {
                        value: 12,
                        message: "max Length are 12",
                      },
                    },
                  })}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 "
                  required=""
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="newsletter"
                    aria-describedby="newsletter"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 "
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label for="newsletter" className="font-light text-gray-900 ">
                    Show Password
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
              >
                Done
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
