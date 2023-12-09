import React from "react";
import { Form, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

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
    confirmePassword,
  }) => {
    console.log(
      email + "<br/>" + firstName + "" + lastName + "<br/>" + password
    ),
      confirmePassword;
  };

  return (
    <div className="h-screen">
      {/* <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->  */}
      <section className="h-screen">
        <div className="h-full">
          {/* <!-- Left column container with background--> */}
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt="Sample image"
              />
            </div>

            {/* <!-- Right column container --> */}
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
              <form>
                {/* <!--Sign in section--> */}

                {/* <!-- Separator between social media sign in and email/password sign in --> */}
                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                  <p className="mx-4 mb-0 text-center font-bold text-xl">
                    Create New Account
                  </p>
                </div>

                {/* <!-- first Name --> */}
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    {...register("firstName", {
                      required: "Enter Your username please!",
                      minLength: {
                        value: 2,
                        message: "Please Enter atleast more than 2 character",
                      },
                      maxLength: {
                        value: 15,
                        message: "Please Enter atleast less than 15 character",
                      },
                    })}
                    className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  "
                    placeholder="First Name"
                  />
                  {errors.firstName && (
                    <span className="text-red-700 col-span-1 md:col-span-2 ">
                      {errors.firstName.message}
                    </span>
                  )}
                </div>

                {/* <--last name   */}
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    {...register("lastName", {
                      required: "Enter Your username please!",
                      minLength: {
                        value: 2,
                        message: "Please Enter atleast more than 2 character",
                      },
                      maxLength: {
                        value: 15,
                        message: "Please Enter atleast less than 15 character",
                      },
                    })}
                    className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  "
                    placeholder="LastName"
                  />
                  {errors.lastName && (
                    <span className="text-red-700 col-span-1 md:col-span-2 ">
                      {errors.lastName.message}
                    </span>
                  )}
                </div>

                {/* <!-- Email input --> */}
                <div className="relative mb-6" data-te-input-wrapper-init>
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

                {/* <-- confirem password */}
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="password"
                    {...register("confiremPassword", {
                      required: "Please Enter Correct Confirem Password !",
                    })}
                    className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  "
                    placeholder="Confirem Password"
                  />
                  {errors.confiremPassword && (
                    <span className="text-red-700 col-span-1 md:col-span-2 ">
                      {errors.confiremPassword.message}
                    </span>
                  )}
                </div>

                {/* <!-- Login button --> */}
                <div className="text-center  lg:text-left">
                  <button
                    type="button"
                    className="inline-block rounded bg-gray-400 text-gray-50 px-20  pb-2.5 pt-3 text-sm font-medium uppercase leading-normal"
                    onClick={handleSubmit(handleRegister)}
                  >
                    Sign UP
                  </button>

                  <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                    I have an account?
                    <Link
                      to="/SignIn"
                      className="transition duration-150 ease-in-out  "
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
