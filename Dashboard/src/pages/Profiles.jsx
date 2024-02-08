/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import axios from 'axios'

const Profiles = () => {
  const [userDetails, setUserDetails] = useState(null)
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
  console.log({userDetails})
  return (
    // <div className="space-y-6 flex  justify-center items-center h-screen bg-gray-300 ">
    //   <div className="bg-gray-100 h-[50vh] flex w-2/3  mb-80 ">
     
        // <div className="container mx-auto py-8">
        //  <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 px-4">
        //   { userDetails && (
        //       <div className="col-span-4 sm:col-span-3">
        //         <div className="bg-gray-800 shadow rounded-lg p-6  ">
        //           <div className="flex flex-col items-center bg-blue-500">
        //             <img
        //               src="https:avatars.githubusercontent.com/u/128363342?v=4"
        //               className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
        //             />
        //             <h1 className="text-xl font-bold text-gray-400">
                 
        //               {userDetails.firstname} {userDetails.lastname}
        //             </h1>
        //           </div>
        //           <hr className="my-6 border-t border-gray-300" />
        //           <div className="flex flex-col">
        //             <span className="text-gray-600 uppercase font-bold tracking-wider mb-2">
        //               information
        //             </span>
        //             <div className="px-4 py-5 sm:p-6">
        //               <div className="flex flex-row items-center justify-between mb-6">
        //                 <div className="flex flex-col items-start">
        //                   <span className="text-sm font-medium text-blue-300">
        //                     First Name
        //                   </span>
        //                   <span className="text-sm font-medium text-gray-600">
        //                     {userDetails.firstname}
        //                   </span>
        //                 </div>
        //                 <div className="flex flex-col items-start">
        //                   <span className="text-sm font-medium text-blue-600 hover:underline">
        //                     Edit
        //                   </span>
        //                 </div>
        //               </div>
        //               <div className="flex flex-row items-center justify-between mb-6">
        //                 <div className="flex flex-col items-start">
        //                   <span className="text-sm font-medium text-blue-300">
        //                     Last Name
        //                   </span>
        //                   <span className="text-sm font-medium text-gray-600">
        //                     {userDetails.lastname}
        //                   </span>
        //                 </div>
        //                 <div className="flex flex-col items-start">
        //                   <span className="text-sm font-medium text-blue-600 hover:underline">
        //                     Edit
        //                   </span>
        //                 </div>
        //               </div>
        //               <div className="flex flex-row items-center justify-between mb-6">
        //                 <div className="flex flex-col items-start">
        //                   <span className="text-sm font-medium text-blue-600">
        //                     <i
        //                       className="fa fa-envelope"
        //                       aria-hidden="true"
        //                     ></i>
        //                   </span>
        //                   <span className="text-sm font-medium text-gray-600">
        //                     {userDetails.email}
        //                   </span>
        //                 </div>
        //                 <div className="flex flex-col items-start">
        //                   <span className="text-sm font-medium text-blue-600 hover:underline">
        //                     Edit
        //                   </span>
        //                 </div>
        //               </div>
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //     )}
        //   </div>
        // </div>
    //   </div>
    // </div>

    <div className="space-y-6 flex  justify-center items-center h-screen bg-gray-150  ">
    <div className=" h-[50vh] flex w-2/3  mb-80 ">


      <div className="container mx-auto py-8">
         <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 px-4">
          { userDetails && (
              <div className="col-span-4 sm:col-span-3">
                <div className="bg-gray-100 shadow rounded-lg p-6  ">
                  <div className="flex flex-col items-center bg-blue-500">
                    <img
                      src="https:avatars.githubusercontent.com/u/128363342?v=4"
                      className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                    />
                    <h1 className="text-xl font-bold text-gray-400">
                 
                      {userDetails.firstname} {userDetails.lastname}
                    </h1>
                  </div>
                  <hr className="my-6 border-t border-gray-300" />
                  <div className="flex flex-col">
                    <span className="text-gray-600 uppercase font-bold tracking-wider mb-2">
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
