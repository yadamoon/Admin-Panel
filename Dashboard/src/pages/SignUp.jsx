
// eslint-disable-next-line no-unused-vars
import { Form, useForm } from "react-hook-form";
import { Link  , useNavigate} from "react-router-dom";
import { http } from "../services/http/http"
import Swal from 'sweetalert2';
import { useState } from "react";
const SignUp = () => {
  const navigate = useNavigate(); 
  const [showScroll, setShowScroll] = useState(false);
   
  const handleMouseEnter = () => {
      setShowScroll(true);
  };

  const handleMouseLeave = () => {
      setShowScroll(false);
  };


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    // eslint-disable-next-line no-unused-vars
    reset,
  } = useForm({
    defaultValues: {
    firstname :'',
    lastname:'',
    email:'',
    password:''
   
    },
  });
  const password = watch("password", ""); // Watch the "newPassword" field
  // eslint-disable-next-line no-unused-vars
  const confirm_password = watch("confirm_password", ""); // Watch the "confirmPassword" field

  const addNewUser = async ({ firstname, lastname, email, password }) => {
    const result = await http.request({
      method: 'post',
      url: 'users',
      data: { firstname, lastname, email, password },
    })
    if (!result.isError) {
      reset()
      navigate('/SignIn')
      Swal.fire({
        icon: 'success',
        title: 'Registration Successful',
        showConfirmButton: false,
        timer: 1500  // Auto close after 1.5 seconds
      });
      console.log(result)
    }
   
    else {
      console.log({ error: result.error })
      Swal.fire({
        icon: 'error',
        title: 'Wrong please try again',
        timer: 2000,
        showConfirmButton: false,
      })
    }
  }


  return (
    <div
      className="sm:bg-white md:bg-white "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundImage: `url("https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp")`,
        backgroundRepeat: "no-repeat",
        width: "auto",
        height:"auto",
        backgroundPosition: "center",
        backgroundSize: "cover",
        overflow: showScroll ? 'auto' : 'hidden'
      }}
  
  
    >
      {/* <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->  */}
      <section className="h-screen">
        <div className="h-full">
          {/* <!-- Left column container with background--> */}
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
       

            {/* <!-- Right column container --> */}
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12 bg-white p-5 rounded-md relative h-auto w-full mx-5 shadow-lg shadow-slate-200">
              <form className=" mt-4 space-y-4 lg:mt-5 md:space-y-5 ">
                {/* <!--Sign in section--> */}

                {/* <!-- Separator between social media sign in and email/password sign in --> */}
                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                  <p className="mx-4 mb-0 text-center font-bold text-xl text-blue-600">
                    Create New Account
                  </p>
                </div>

                {/* <!-- first Name --> */}
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    {...register("firstname", {
                      required: "Enter Your username please!",
                      minLength: {
                        value: 2,
                        message: "Please Enter atleast more than 2 character",
                      },
                      maxLength: {
                        value: 30,
                        message: "Please Enter atleast less than 15 character",
                      },
                    })}
                    className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  "
                    placeholder="First Name"
                  />
                  {errors.firstname && (
                    <span className="text-red-700 col-span-1 md:col-span-2 ">
                      {errors.firstname.message}
                    </span>
                  )}
                </div>

                {/* <--last name   */}
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    {...register("lastname", {
                      required: "Enter Your username please!",
                      minLength: {
                        value: 2,
                        message: "Please Enter atleast more than 2 character",
                      },
                      maxLength: {
                        value: 30,
                        message: "Please Enter atleast less than 15 character",
                      },
                    })}
                    className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  "
                    placeholder="LastName"
                  />
                  {errors.lastname && (
                    <span className="text-red-700 col-span-1 md:col-span-2 ">
                      {errors.lastname.message}
                    </span>
                  )}
                </div>

                {/* <!-- Email input --> */}
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    {...register("email", {
                      required: "Please Enter Correct Email!",
                      pattern: {
                        value: /[@]/,
                        message: "Enter at least one special character",
                      },
                      minLength: {
                        value: 7,
                        message: "Please Enter atleast more than 2 character",
                      },
                      maxLength: {
                        value: 32,
                        message: "Please Enter atleast less than 15 character",
                      },
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
                    name="password"
                    {...register("password", {
                      required: "Please Enter New Password!",
                      minLength: {
                        value: 6,
                        message: "min Length 8",
                        maxLength: {
                          value: 10,
                          message: "max Length are 12",
                        },
                      },
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
                    name="confiremPassword"
                    {...register("confirm_password", {
                      required: true,
                      validate: (value) =>
                        value === password || "The passwords do not match",
                      minLength: {
                        value: 6,
                        message: "min Length are 6",
                      },
                      maxLength: {
                        value: 10,
                        message: "max Length are 10",
                      },
                    })}
                    className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  "
                    placeholder="Confirem Password"
                  />
                  {errors.confirm_password && (
                    <span className="text-red-700 col-span-1 md:col-span-2 ">
                      {errors.confirm_password.message}
                    </span>
                  )}
                </div>

                {/* <!-- Login button --> */}
                <div className="text-center  ">
                  <button
                    type="button"
                    className="inline-block  bg-blue-500 text-white border rounded-lg  p-2 pl-10 pr-10  text-sm font-medium uppercase hover:opacity-75 hover:text-white"
                    onClick={handleSubmit(addNewUser)}
                  >
                    Sign UP
                  </button>
                </div>
                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                  I have an account?
                  <Link
                    to="/SignIn"
                    className="transition duration-150 ease-in-out text-blue-500 opacity-60 "
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
