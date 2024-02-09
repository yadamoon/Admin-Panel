/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

const Profiles = () => {
  const [userDetails, setUserDetails] = useState(null)
  const [profilePictureUrl, setProfilePictureUrl] = useState()
  const userId = useSelector((state) => state.auth.id)
  console.log('Id is' + userId)

  useEffect(() => {
    console.log('say sth ' + userId)
    axios
      .get(`http://localhost:3000/api/v1/users/${userId}`)
      .then((response) => {
        setUserDetails(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.error('Error fetching user details:', error)
      })
  }, [userId])
  console.log({ userDetails })
  return (
    <div className="space-y-6 flex  justify-center items-center h-screen bg-white ">
      <div className=" h-[50vh] flex w-2/3  mb-80 ">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 px-4">  
            {userDetails && (
              <div className="col-span-4 sm:col-span-3">
                <div className="bg-gray-100 shadow rounded-lg   ">
                  <div className="flex flex-col items-center bg-blue-500">
                    <div className="justify-center items-center w-40 h-40 p-1">
                      {userDetails.profilePicture ? ( // Check if profile picture is available
                        <img src={userDetails.profilePicture} alt="Profile" /> // Use the provided profile picture
                      ) : (
                        <div className="bg-white flex items-center w-full h-full justify-center text-blue-500 text-4xl font-bold  rounded-full">
                          {userDetails.firstname.charAt(0).toUpperCase()}{' '}
                          {/* Display the first character of the first name */}
                        </div>
                      )}
                    </div>
                    <div className="w-2/3 sm:text-center pl-5 mt-10 text-start">
                      <p className="font-poppins font-bold text-heading sm:text-4xl text-2xl">
                        {userDetails.firstname} {userDetails.lastname}{' '}
                      </p>
                    </div>
                  </div>
                  {/* <hr className="my-6 border-t border-gray-300" /> */}
                  <div className="flex flex-col bg-white">
                    <span className="text-blue-600 mx-3 uppercase font-bold tracking-wider mb-2">
                      information
                    </span>
                    <div className="px-4 py-5 sm:p-6">
                      <div className="flex flex-row items-center justify-between mb-6">
                        <div className="flex flex-col items-start">
                          <span className="text-sm  text-gray-700 font-bold">
                            First Name
                          </span>
                          <span className="text-sm font-medium text-gray-600">
                            {userDetails.firstname}
                          </span>
                        </div>
                        <div className="flex flex-col items-start">
                          <span className="text-sm font-medium text-blue-600 hover:underline">
                            Edit
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between mb-6">
                        <div className="flex flex-col items-start">
                          <span className="text-sm text-gray-700 font-bold">
                            Last Name
                          </span>
                          <span className="text-sm font-medium text-gray-600">
                            {userDetails.lastname}
                          </span>
                        </div>
                        <div className="flex flex-col items-start">
                          <span className="text-sm font-medium text-blue-600 hover:underline">
                            Edit
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between mb-6">
                        <div className="flex flex-col items-start">
                          <span className="text-sm text-gray-700 font-bold">
                            <i
                              className="fa fa-envelope"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <span className="text-sm font-medium text-gray-600">
                            {userDetails.email}
                          </span>
                        </div>
                        <div className="flex flex-col items-start">
                          <span className="text-sm font-medium text-blue-600 hover:underline">
                            Edit
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profiles
