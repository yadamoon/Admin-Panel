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
                className=" py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border bg-white  rounded dark:text-white  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
                placeholder="password"
                className=" py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border bg-white  rounded dark:text-white  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
    // <div className="h-screen mt-[10vh]">
    //   <div className="flex  justify-center items-center text-center p-2 mb-4 rounded bg-gray-100">
    //     <p className="text-2xl text-gray-400 dark:text-gray-500">
    //       Create New User
    //     </p>
    //   </div>
    //   <form className="max-w-md mx-auto">
    //     <div className="relative z-0 w-full mb-5 group">
    //       <input
    //         type="text"
    //         {...register("firstName", {
    //           required: "Enter Your firstName please!",
    //         })}
    //         className=" py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border bg-white  rounded dark:text-white  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //         placeholder=" "
    //       />
    //       {errors.firstName && (
    //         <span className="text-red-700 col-span-1 md:col-span-2 ">
    //           {errors.firstName.message}
    //         </span>
    //       )}
    //     </div>
    //     <div className="relative z-0 w-full mb-5 group">
    //       <input
    //         type="text"
    //         {...register("lastName", {
    //           required: "Enter Your lastName please!",
    //         })}
    //         className=" py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border bg-white  rounded dark:text-white  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //         placeholder=" "
    //       />
    //       {errors.lastName && (
    //         <span className="text-red-700 col-span-1 md:col-span-2 ">
    //           {errors.lastName.message}
    //         </span>
    //       )}
    //     </div>

    //     <div className="relative z-0 w-full mb-5 group">
    //       <input
    //         type="email"
    //         {...register("email", {
    //           required: "Enter Your Email please!",
    //         })}
    //         className=" py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border  appearance-none dark:text-white bg-white  rounded dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //         placeholder="email"
    //       />
    //       {errors.email && (
    //         <span className="text-red-700 col-span-1 md:col-span-2 ">
    //           {errors.email.message}
    //         </span>
    //       )}
    //     </div>
    //     <div className="grid md:grid-cols-2 md:gap-6">
    //       <div className="relative z-0 w-full mb-5 group">
    //         <input
    //           type="password"
    //           {...register("password", {
    //             required: "Enter Your new password please!",
    //           })}
    //           className=" py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border  dark:text-white bg-white  rounded dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //           placeholder="password"
    //         />
    //         {errors.password && (
    //           <span className="text-red-700 col-span-1 md:col-span-2 ">
    //             {errors.password.message}
    //           </span>
    //         )}
    //       </div>
    //       <div className="relative z-0 w-full mb-5 group">
    //         <input
    //           type="password"
    //           {...register("ConfirmePassword", {
    //             required: "Enter Your Correct Password please!",
    //           })}
    //           className=" py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border rounded bg-white dark:text-white  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //           placeholder="ConfirmePassword"
    //         />
    //         {errors.ConfirmePassword && (
    //           <span className="text-red-700 col-span-1 md:col-span-2 ">
    //             {errors.ConfirmePassword.message}
    //           </span>
    //         )}
    //       </div>
    //     </div>
    //     <div>
    //       <div className="relative z-0 w-full mb-5 group">
    //         <input
    //           type="tel"
    //           pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
    //           {...register("tel", {
    //             required: "Enter Your telephone number please!",
    //           })}
    //           className=" py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  dark:text-white  border rounded bg-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //           placeholder="Phone Number"
    //         />
    //         {errors.tel && (
    //           <span className="text-red-700 col-span-1 md:col-span-2 ">
    //             {errors.tel.message}
    //           </span>
    //         )}
    //       </div>
    //     </div>
    //     <button
    //       type="submit"
    //       className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
    //     >
    //       Done!
    //     </button>
    //   </form>
    // </div>
  );
}

export default SignIn;
