import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
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

  // const handleCkeckBox = () => {
  //   if (passwordType === "password") {
  //     setPasswordType("text");
  //     return;
  //   }
  //   setPasswordType("password");
  // };

  const handleSignIn = ({ email, password }) => {
    console.log(email + "" + password);
    console.log("hello");
  };

  return (
    <div className="h-screen ">
      {/* <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->  */}
      <section className="h-screen mx-15 mb-1">
        <div className="h-full">
          {/* <!-- Left column container with background--> */}
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between ">
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-3/12 mx-20">
              <form className="space-y-4 md:space-y-6">
                {/* <!--Sign in section--> */}
                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                  <p className="mx-4 mb-0 text-center font-bold text-xl">
                    Login Here
                  </p>
                </div>
                {/* <!-- Email input --> */}
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <label htmlFor="Password" className="font-bold">
                    Email
                  </label>
                  <input
                    type="text"
                    {...register("email", {
                      required: "Please Enter Correct Email!",
                    })}
                    className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  "
                    placeholder="Email address"
                  />
                  {errors.email && (
                    <span className="text-red-700 col-span-1 md:col-span-2 ">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                {/* <!-- new Password input --> */}
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <label htmlFor="Password" className="font-bold ">
                    Password
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: "Please Enter Correct Password!",
                    })}
                    className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  "
                    placeholder="Password"
                  />
                  {errors.password && (
                    <span className="text-red-700 col-span-1 md:col-span-2 ">
                      {errors.password.message}
                    </span>
                  )}
                </div>

                {/* <!-- Login button --> */}
                <div className="text-center  lg:text-left">
                  <button
                    type="button"
                    className="inline-block rounded bg-gray-600 hover:bg-green-700 text-gray-50 px-20  pb-2.5 pt-3 text-sm font-medium uppercase leading-normal mx-20"
                    onClick={handleSubmit(handleSignIn)}
                  >
                    Login
                  </button>

                  <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                    I don't have an account?
                    <Link
                      to="/SignUp"
                      className="transition duration-150 ease-in-out  hover:text-blue-600 "
                    >
                      Sign Up
                    </Link>
                  </p>
                </div>
              </form>
            </div>
            <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <img
                src="https://app.dubbpie.com/assets/images/login-img.png"
                className="w-full"
                alt="Sample image"
              />
            </div>

            {/* <!-- Right column container --> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignIn;
