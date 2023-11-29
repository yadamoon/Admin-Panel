import React from "react";
import { Form, useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleRegister = ({
    firstName,
    lastName,
    email,
    password,
    ConfirmePassword,
    tel,
  }) => {
    console.log(username + "" + password);
  };

  return (
    <div className="h-screen mt-[10vh]">
      <div className="flex  justify-center items-center text-center p-2 mb-4 rounded bg-gray-100">
        <p className="text-2xl text-gray-400 dark:text-gray-500">
          Create New User
        </p>
      </div>
      <form className="max-w-md mx-auto">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            {...register("firstName", {
              required: "Enter Your firstName please!",
            })}
            className=" py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border bg-white  rounded dark:text-white  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          {errors.firstName && (
            <span className="text-red-700 col-span-1 md:col-span-2 ">
              {errors.firstName.message}
            </span>
          )}
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            {...register("lastName", {
              required: "Enter Your lastName please!",
            })}
            className=" py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border bg-white  rounded appearance-none dark:text-white  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          {errors.lastName && (
            <span className="text-red-700 col-span-1 md:col-span-2 ">
              {errors.lastName.message}
            </span>
          )}
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            {...register("email", {
              required: "Enter Your Email please!",
            })}
            className=" py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border  appearance-none dark:text-white bg-white  rounded dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="email"
          />
          {errors.email && (
            <span className="text-red-700 col-span-1 md:col-span-2 ">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              {...register("password", {
                required: "Enter Your new password please!",
              })}
              className=" py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border  dark:text-white bg-white  rounded dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="password"
            />
            {errors.password && (
              <span className="text-red-700 col-span-1 md:col-span-2 ">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              {...register("ConfirmePassword", {
                required: "Enter Your Correct Password please!",
              })}
              className=" py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border rounded bg-white dark:text-white  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="ConfirmePassword"
            />
            {errors.ConfirmePassword && (
              <span className="text-red-700 col-span-1 md:col-span-2 ">
                {errors.ConfirmePassword.message}
              </span>
            )}
          </div>
        </div>
        <div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              {...register("tel", {
                required: "Enter Your telephone number please!",
              })}
              className=" py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  dark:text-white  border rounded bg-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Phone Number"
            />
            {errors.tel && (
              <span className="text-red-700 col-span-1 md:col-span-2 ">
                {errors.tel.message}
              </span>
            )}
          </div>
          {/* <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_company"
              id="floating_company"
              className=" py-2.5 px-0 w-full text-sm text-gray-900  border rounded appearance-none dark:text-white  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
          </div> */}
        </div>
        <button
          type="submit"
          onClick={handleSubmit(handleRegister)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
        >
          Done!
        </button>
      </form>
    </div>
  );
};

export default SignUp;
