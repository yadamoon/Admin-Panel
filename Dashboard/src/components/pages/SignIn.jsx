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
    <div className="h-screen">
      <h1 className="text-center font-bold text-2xl mt-32">Login Page </h1>
      {/* <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->  */}
      <section className="h-screen mx-15">
        <div className="h-full">
          {/* <!-- Left column container with background--> */}
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-3/12 mx-20">
              <form className="border  h-auto   p-2">
                {/* <!--Sign in section--> */}

                {/* <!-- Email input --> */}
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <label htmlFor="password" className="font-bold">
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
                  <label htmlFor="password" className="font-bold ">
                    Password
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: "Please Enter New Password!",
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
                    className="inline-block rounded bg-gray-400 text-gray-50 px-20  pb-2.5 pt-3 text-sm font-medium uppercase leading-normal"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    // onClick={handleSubmit(handleRegister)}
                  >
                    Login
                  </button>

                  <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                    I don't have an account?
                    <a
                      href="#!"
                      className="transition duration-150 ease-in-out  "
                    >
                      Sign Up
                    </a>
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
