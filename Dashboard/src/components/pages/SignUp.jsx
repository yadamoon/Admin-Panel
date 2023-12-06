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
    // <div classNameName="h-screen mt-[10vh]">
    //   <div classNameName="flex  justify-center items-center text-center p-2 mb-4 rounded bg-gray-100">
    //     <p classNameName="text-2xl text-gray-400 dark:text-gray-500">
    //       Create New User
    //     </p>
    //   </div>
    //   <form classNameName="max-w-md mx-auto">
    //     <div classNameName="relative z-0 w-full mb-5 group">
    //       <input
    //         type="text"
    //         {...register("firstName", {
    //           required: "Enter Your firstName please!",
    //         })}
    //         classNameName=" py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border bg-white  rounded  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //         placeholder=" "
    //       />
    //       {errors.firstName && (
    //         <span classNameName="text-red-700 col-span-1 md:col-span-2 ">
    //           {errors.firstName.message}
    //         </span>
    //       )}
    //     </div>
    //     <div classNameName="relative z-0 w-full mb-5 group">
    //       <input
    //         type="text"
    //         {...register("lastName", {
    //           required: "Enter Your lastName please!",
    //         })}
    //         classNameName=" py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border bg-white  rounded appearance-none   dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //         placeholder=" "
    //       />
    //       {errors.lastName && (
    //         <span classNameName="text-red-700 col-span-1 md:col-span-2 ">
    //           {errors.lastName.message}
    //         </span>
    //       )}
    //     </div>

    //     <div classNameName="relative z-0 w-full mb-5 group">
    //       <input
    //         type="email"
    //         {...register("email", {
    //           required: "Enter Your Email please!",
    //         })}
    //         classNameName=" py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border  appearance-none  bg-white  rounded dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //         placeholder="email"
    //       />
    //       {errors.email && (
    //         <span classNameName="text-red-700 col-span-1 md:col-span-2 ">
    //           {errors.email.message}
    //         </span>
    //       )}
    //     </div>
    //     <div classNameName="grid md:grid-cols-2 md:gap-6">
    //       <div classNameName="relative z-0 w-full mb-5 group">
    //         <input
    //           type="password"
    //           {...register("password", {
    //             required: "Enter Your new password please!",
    //           })}
    //           classNameName=" py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border   bg-white  rounded dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //           placeholder="password"
    //         />
    //         {errors.password && (
    //           <span classNameName="text-red-700 col-span-1 md:col-span-2 ">
    //             {errors.password.message}
    //           </span>
    //         )}
    //       </div>
    //       <div classNameName="relative z-0 w-full mb-5 group">
    //         <input
    //           type="password"
    //           {...register("ConfirmePassword", {
    //             required: "Enter Your Correct Password please!",
    //           })}
    //           classNameName=" py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border rounded bg-white   dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //           placeholder="ConfirmePassword"
    //         />
    //         {errors.ConfirmePassword && (
    //           <span classNameName="text-red-700 col-span-1 md:col-span-2 ">
    //             {errors.ConfirmePassword.message}
    //           </span>
    //         )}
    //       </div>
    //     </div>
    //     <div>
    //       <div classNameName="relative z-0 w-full mb-5 group">
    //         <input
    //           type="tel"
    //           pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
    //           {...register("tel", {
    //             required: "Enter Your telephone number please!",
    //           })}
    //           classNameName=" py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent    border rounded bg-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //           placeholder="Phone Number"
    //         />
    //         {errors.tel && (
    //           <span classNameName="text-red-700 col-span-1 md:col-span-2 ">
    //             {errors.tel.message}
    //           </span>
    //         )}
    //       </div>
    //     </div>
    //     <button
    //       type="submit"
    //       onClick={handleSubmit(handleRegister)}
    //       classNameName=" bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
    //     >
    //       Done!
    //     </button>
    //   </form>
    // </div>
    <div>
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
                <div className="flex flex-row items-center justify-center lg:justify-start">
                  <p className="mb-0 mr-4 text-lg">Sign in with</p>

                  {/* <!-- Facebook --> */}
                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="inlne-block mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    {/* <!-- Facebook --> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto h-3.5 w-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </button>

                  {/* <!-- Twitter --> */}
                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="inlne-block mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    {/* <!-- Twitter --> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto h-3.5 w-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </button>

                  {/* <!-- Linkedin --> */}
                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="inlne-block mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    {/* <!-- Linkedin --> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto h-3.5 w-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </button>
                </div>

                {/* <!-- Separator between social media sign in and email/password sign in --> */}
                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                  <p className="mx-4 mb-0 text-center font-semibold dark:">
                    Or
                  </p>
                </div>

                {/* <!-- first Name --> */}
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  "
                    id="exampleFormControlInput2"
                    placeholder="First Name"
                  />
                  {/* <label
                    for="exampleFormControlInput2"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15]  transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] "
                  >
                    Email address
                  </label> */}
                </div>
                {/* <--last name   */}
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  "
                    id="exampleFormControlInput2"
                    placeholder="LastName"
                  />
                  {/* <label
                    for="exampleFormControlInput2"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15]  transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] "
                  >
                    Email address
                  </label> */}
                </div>
                {/* <!-- Email input --> */}
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  "
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                  />
                  {/* <label
                    for="exampleFormControlInput2"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15]  transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] "
                  >
                    Email address
                  </label> */}
                </div>

                {/* <!-- new Password input --> */}
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="password"
                    className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  "
                    id="exampleFormControlInput22"
                    placeholder="Password"
                  />
                  {/* <label
                    for="exampleFormControlInput22"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15]  transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8]  peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                  >
                    Password
                  </label> */}
                </div>
                {/* <-- confirem password */}
                {/* <!-- Password input --> */}
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="password"
                    className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  "
                    id="exampleFormControlInput22"
                    placeholder="Confirem Password"
                  />
                  {/* <label
                    for="exampleFormControlInput22"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15]  transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8]  peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                  >
                    Password
                  </label> */}
                </div>
                <div className="mb-6 flex items-center justify-between">
                  {/* <!-- Remember me checkbox --> */}
                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                      type="checkbox"
                      value=""
                      id="exampleCheck2"
                    />
                    <label
                      className="inline-block pl-[0.15rem] hover:cursor-pointer"
                      for="exampleCheck2"
                    >
                      Show Password
                    </label>
                  </div>
                </div>

                {/* <!-- Login button --> */}
                <div className="text-center  lg:text-left">
                  <button
                    type="button"
                    className="inline-block rounded bg-gray-400 text-gray-50 px-20  pb-2.5 pt-3 text-sm font-medium uppercase leading-normal"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Sign UP
                  </button>

                  <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                    I have an account?
                    <a
                      href="#!"
                      className="transition duration-150 ease-in-out  "
                    >
                      Login
                    </a>
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
