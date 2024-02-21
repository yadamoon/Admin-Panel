/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Form, useForm } from 'react-hook-form'
import { http } from "../services/http/http"

const Products = () => {
  const [showScroll, setShowScroll] = useState(false)
  const navigate = useNavigate();


  const handleMouseEnter = () => {
    setShowScroll(true)
  }

  const handleMouseLeave = () => {
    setShowScroll(false)
  }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    // eslint-disable-next-line no-unused-vars
    reset,
  } = useForm({
    defaultValues: {
    task:''
   
    },
  });
  const addNewTask = async ({ task}) => {
    const result = await http.request({
      method: 'post',
      url: 'tasks',
      data: { task },
    })
    if (!result.isError) {
      reset()
      navigate('/Products')
   
      console.log(result)
    }
   
 
  }

  const items = [
    {
      name: ' Account Overview',
      src: 'https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1703721600&semt=sph',
      alt: 'home-1',
      msg: '',
    },
    {
      name: ' Subscription Plans',
      src: 'https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1703721600&semt=sph',
      alt: 'pricetags-1',
      msg: '',
    },
    {
      name: 'Payment Options',
      src: 'https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1703721600&semt=sph',
      alt: 'home-1',
      msg: '',
    },
    {
      name: ' Notification Settings',
      src: 'https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1703721600&semt=sph',
      alt: 'home-1',
      msg: '',
    },
    {
      name: 'Profile Preferences',
      src: 'https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1703721600&semt=sph',
      alt: 'home-1',
      msg: '',
    },
    {
      name: ' Privacy and Cookies',
      src: 'https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1703721600&semt=sph',
      alt: 'home-1',
      msg: '',
    },
  ]


  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ overflow: showScroll ? 'auto' : 'hidden' }}
    >
      <div className="bg-white w-full h-full">
        <form className=" mt-4 space-y-4 lg:mt-5 md:space-y-5 ">
          {/* <!-- Separator between social media sign in and email/password sign in --> */}
          <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-bold text-xl text-blue-600">
              Create New Task
            </p>
          </div>
          {/* <!-- first Name --> */}
          <div
            className="relative mb-6 justify-center items-center text-center"
            data-te-input-wrapper-init
          >
            <input
              type="text"
              {...register('task', {
                required: 'Enter New Task please!',
              })}
              className=" w-2/3 h-32 rounded border border-gray-200 bg-transparent    "
              // placeholder="Create new task"
            />
            {errors.task && (
              <span className="text-red-700 col-span-1 md:col-span-2 ">
                {errors.task.message}
              </span>
            )}
          </div>
          {/* <!-- Login button --> */}
          <div className="text-center  ">
            <button
              type="button"
              className="inline-block  bg-blue-500 text-white border rounded-lg  p-2 pl-10 pr-10  text-sm font-medium uppercase hover:opacity-75 hover:text-white"
           onClick={handleSubmit(addNewTask)}
            >
              Done
            </button>
          </div>
        </form>

        <div className="container mx-auto">
          <div role="article" className="bg-white py-12 md:px-8">
            <div className="px-4 xl:px-0 py-10">
              <div className="flex flex-col lg:flex-row flex-wrap">
                <div className="mt-4 lg:mt-0 lg:w-3/5">
                  <div>
                    <h1 className="text-3xl ml-2 lg:ml-0 lg:text-4xl font-bold text-blue-600 underline tracking-normal lg:w-11/12">
                   Tasks
                    </h1>
                  </div>
                </div>
                <div className="lg:w-2/5 flex mt-10 ml-2 lg:ml-0 lg:mt-0 lg:justify-end">
                  <div className="pt-2 relative  text-gray-600">
                    <input
                      className="focus:ring-2 focus:ring-offset-2 border  focus:ring-gray-400 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                      type="search"
                      name="search"
                      placeholder="Search"
                    />
                    <button
                      type="submit"
                      className="focus:ring-2 focus:ring-offset-2 text-gray-600 focus:text-indigo-700 focus:rounded-full  focus:bg-gray-100 focus:ring-indigo-700 bg-white focus:outline-none absolute right-0 top-0 mt-5 mr-4"
                    >
                      <svg
                        className=" h-4 w-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 56.966 56.966"
                        style={{ enableBackground: 'new 0 0 56.966 56.966' }}
                        xmlSpace="preserve"
                        width="512px"
                        height="512px"
                      >
                        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 xl:px-0 justify-center items-center flex ">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pb-6 gap-8 justify-center items-center">
                {React.Children.toArray(
                  items.map((item) => (
                    <div role="cell" className="bg-white shadow border ">
                      <div className="bg-white  shawo p-5 rounded-md relative h-full w-full">
                        <span>
                          <img
                            className="bg-gray-200 p-2 mb-5 rounded-full"
                            // src={item.src}
                            // alt={item.msg}
                          />
                        </span>
                        <h1 className="pb-4 text-2xl font-semibold text-center text-blue-500">
                          {item.name}
                        </h1>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
