import React, { useState } from "react";
import { useForm } from "react-hook-form";
function SignIn() {
  const [passwordType, setPasswordType] = useState("password");
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

  const handleCkeckBox = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const handleLogin = ({ username, password }) => {
    console.log(username + "" + password);
  };

  return (
    <div className="h-screen my-16 ">
      <div className="flex justify-center ">
        <div className=" bg-white mx-4 md:mx-0 w-full md:w-2/3 lg:w-1/3 rounded-xl h-auto p-6">
          <div className="text-2xl">
            <h1>LOGIN</h1>
          </div>
          <form className="w-full space-y-3">
            <div className="grid grid-cols-1 gap-6">
              <input
                {...register("username", {
                  required: "Enter Your username please!",
                })}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                placeholder="username"
              />
              {errors.username && (
                <span className="text-red-700 col-span-1 md:col-span-2 ">
                  {errors.username.message}
                </span>
              )}
              <input
                type={passwordType}
                {...register("password", {
                  required: "Enter your psssword please!",
                })}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                placeholder="password"
              />

              {errors.password && (
                <span className="text-red-700 col-span-1 md:col-span-2 ">
                  {errors.password.message}
                </span>
              )}
              <label htmlFor="showPassword" className="font-bold space-x-3">
                <input
                  type="checkBox"
                  {...register("showPassword", {})}
                  onClick={handleCkeckBox}
                />
                <span> Show Password </span>
              </label>
            </div>
            <div>
              <a
                href="#"
                class="mt-6 text-indigo-900 flex justify-end text-sm font-normal underline"
              >
                Forgot password?
              </a>
            </div>
            <div className="space-y-3" onClick={handleSubmit(handleLogin)}>
              <div className="border bg-gray-500 uppercase text-center text-white w-full  pl-20 pr-20 pt-3 pb-2 hover:bg-gray-600 hover:text-white rounded md:w-auto ">
                log in
              </div>
            </div>
            <div className="relative flex items-center mt-8">
              <div className="border h-0 w-2/4 border-stone-300"></div>
              <div className=" text-stone-300 px-4 text-sm font-normal">OR</div>
              <div className=" border h-0 w-2/4 border-stone-300"></div>
            </div>
            <div className="border border-green-600 uppercase text-center text-black w-full  pl-20 pr-20 pt-3 pb-2 hover:bg-gray-600 hover:text-white rounded md:w-auto ">
              <a href="#">Create New Acc </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
