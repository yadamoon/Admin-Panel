/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import React,{useEffect, useState} from 'react';
import axios from "axios";


const Profiles = () => {
  const [userDetails, setUserDetails] = useState(null);
  const userId = useSelector((state) => state.auth.id); // Assuming "auth" is the name of the slice in your Redux store
  console.log("Id is"+userId);
  let userInfo;

    userInfo = [
      {
        name: " Yared Chereka",
        email: "yared241993@gmail.com",
        detail:
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est vitae tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas suscipit.Nunc finibus vel ante id euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam erat volutpat. Nulla vulputate pharetra    amet, consectetur adipiscing elit. Sed finibus est vitae tortor ullamcorper, ut vestibulum velit convallis. Aenean  posuere risus non velit egestas suscipit. Nunc finibus vel  ante id euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam erat volutpat. Nulla vulputate pharetra tellus, in luctus risus rhoncus id. Lorem ipsum dolor sit amet, consecteturadipiscing elit. Sed finibus est vitae tortor ullamcorper,ut vestibulum velit convallis. Aenean posuere risus non velit egestas suscipit. Nunc finibus vel ante id euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam erat volutpat. Nulla vulputate pharetra tellus, in luctus risus rhoncus id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est vitae tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas suscipit. Nunc finibus vel ante id euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae",
        titel: "Detail",
        SocialMedia: "",
        telephone: "+251932380202",
      },
    ];

   useEffect(()=>{
    console.log("say sth "+ userId)
    axios.get(`http://localhost:3000/api/v1/users/${userId}`)
    .then(response => {
      setUserDetails(response.data);
    })
    .catch(error => {
      console.error('Error fetching user details:', error);
    });
  
  },[])
    return (
      <div className="space-y-6 flex  justify-center items-center h-screen ">
        
        {userDetails}
        <div className="bg-gray-100 h-[50vh] flex w-2/3   mb-80 ">
          <div className="container mx-auto py-8">
            {/* //!? total user information  */}
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 px-4">
              {/* //!? rendering the user information img , fullName , etc.. */}
              {React.Children.toArray(userInfo.map((userList) => (
                <div  className="col-span-4 sm:col-span-3">
                  <div className="bg-white shadow rounded-lg p-6  ">
                    <div className="flex flex-col items-center bg-blue-500">
                      <img
                        src="https://avatars.githubusercontent.com/u/128363342?v=4"
                        className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                      />
                      <h1 className="text-xl font-bold text-white">{userList.name}</h1>
                    </div>
                    <hr className="my-6 border-t border-gray-300" />
                    <div className="flex flex-col">
                      <span className="text-gray-600 uppercase font-bold tracking-wider mb-2">
                        information
                      </span>
              <div className="px-4 py-5 sm:p-6">
              <div className="flex flex-row items-center justify-between mb-6">
                  <div className="flex flex-col items-start">
                      <span className="text-sm font-medium text-blue-300">First Name</span>
                      <span className="text-sm font-medium text-gray-600">{userList.name}</span>
                  </div>
                  <div className="flex flex-col items-start">
                 <span className="text-sm font-medium text-blue-600 hover:underline">Edit</span>
                  </div>
              </div>
              <div className="flex flex-row items-center justify-between mb-6">
                  <div className="flex flex-col items-start">
                      <span className="text-sm font-medium text-blue-300">Last Name</span>
                      <span className="text-sm font-medium text-gray-600">{userList.name}</span>
                  </div>
                  <div className="flex flex-col items-start">
                 
                      <span className="text-sm font-medium text-blue-600 hover:underline">Edit</span>
                    
                  </div>
              </div>
              <div className="flex flex-row items-center justify-between mb-6">
                  <div className="flex flex-col items-start">
                      <span className="text-sm font-medium text-blue-600">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                      </span>
                      <span className="text-sm font-medium text-gray-600">{userList.email}</span>
           
                  </div>
                  <div className="flex flex-col items-start">
                      <span className="text-sm font-medium text-blue-600 hover:underline">Edit</span>
                    
                  </div>
              </div>
              <div className="flex flex-row items-center justify-between mb-6">
                  <div className="flex flex-col items-start">
                      <span className="text-sm font-medium text-blue-600">
                      <i className="fa fa-phone" aria-hidden="true"></i>{" "}
                      </span>
                      <span className="text-sm font-medium text-gray-600">{userList.telephone}</span>
           
                  </div>
                  <div className="flex flex-col items-start">
                      <span className="text-sm font-medium text-blue-600 hover:underline">Edit</span>
                    
                  </div>
              </div>
             
          </div>
          </div>
          </div>
                  </div>
          )))}
          

            </div>
          </div>
        </div>
      </div>
    );
};

export default Profiles;
