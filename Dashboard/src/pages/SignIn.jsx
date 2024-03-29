/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import auth from '../services/http/auth'
import { useDispatch } from 'react-redux'
import { setStatus, setUser, setId } from '../store/Slice/authSlice'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showOrHiden, setshowOrHiden] = useState('show')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleCkeckBox = () => {
    // eslint-disable-next-line no-undef
    if (type === 'password') {
      // eslint-disable-next-line no-undef
      setIcon(eye)
      // eslint-disable-next-line no-undef
      setType('text')
    } else {
      // eslint-disable-next-line no-undef
      setIcon(eyeOff)
      // eslint-disable-next-line no-undef
      setType('password')
    }
    setshowOrHiden('Hiden')
  }

  const handleLogin = async ({ email, password }) => {
    const result = await auth.signIn({
      method: 'post',
      url: 'auth/login',
      data: { email, password },
    })
    console.log(result)

    if (!result.isError) {
      const { id } = result.user
      console.log('id is  dis' + id)
      dispatch(setId(result.user.id))
      dispatch(setStatus({ status: true }))
      dispatch(setUser({ user: result.user }))
      navigate('/dashboard')
      reset()
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        showConfirmButton: false,
        timer: 1500, // Auto close after 1.5 seconds
      })
      console.log('sucessfuly')
    } else {
      console.log({ error: result.error })
      Swal.fire({
        title: 'Error!',
        icon: 'error',
        timer: 2000,
        showConfirmButton: false,
      })
    }
  }

  return (
    <div
      className="h-screen"
      style={{
        backgroundImage:
          'url("https://app.dubbpie.com/assets/images/login-img.png")',
        backgroundRepeat: 'no-repeat',
        width: 'auto',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <section className="h-screen">
        <div className="h-full">
          {/* <!-- Left column container with background--> */}
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            {/* <!-- Right column container --> */}
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12 bg-white p-5 rounded-md relative h-auto w-full mx-5 shadow-lg shadow-slate-200">
              <form className=" mt-4 space-y-4 lg:mt-5 md:space-y-5 ">
                {/* <!--Sign in section--> */}
                <div>
                  <p className="mx-4 mb-0 text-center font-bold text-xl text-blue-600">
                    Welcome Back ! Please Login Here
                  </p>
                </div>
                {/* <!-- Email input --> */}
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    {...register('email', {
                      required: 'Please Enter Correct Email!',
                      pattern: {
                        value: /[@]/,
                        message: 'Enter at least one special character',
                      },
                      minLength: {
                        value: 7,
                        message: 'Please Enter atleast more than 15 character',
                      },
                      maxLength: {
                        value: 32,
                        message: 'Please Enter atleast less than 32 character',
                      },
                    })}
                    className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  "
                    placeholder="Email "
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
                    type={showPassword ? 'text' : 'password'}
                    {...register('password', {
                      required: 'Please Enter Correct Password!',
                      minLength: {
                        value: 6,
                        message: 'Min Length are 6 ',
                      },
                      maxLength: {
                        value: 10,
                        message: 'Max Length are 10',
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
                <div className="mb-6 flex items-center justify-between">
                  {/* <!-- Remember me checkbox --> */}
                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] text-black border "
                      type="checkbox"
                      onChange={() => setShowPassword(!showPassword)}
                    />
                    <label
                      className="inline-block pl-[0.15rem] hover:cursor-pointer"
                      htmlFor="exampleCheck2"
                    >
                      {showOrHiden}
                    </label>
                  </div>
                  <Link
                    to="/ForgetPassword"
                    className="text-blue-500 hover:opacity-60 mx-6"
                  >
                    Forget Password ?
                  </Link>
                </div>

                {/* <!-- Login button --> */}

                <div className="text-center  ">
                  <button
                    type="button"
                    className="inline-block  bg-blue-500 text-white border rounded-lg  p-2 pl-10 pr-10  text-sm font-medium uppercase hover:opacity-75 hover:text-white"
                    onClick={handleSubmit(handleLogin)}
                  >
                    Login
                  </button>
                </div>

                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                  I don't have an account?
                  <Link
                    to="/SignUp"
                    className="transition duration-150 ease-in-out text-blue-600 hover:opacity-60 "
                  >
                    Sign Up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SignIn
