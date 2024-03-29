/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DetailsUsers = () => {
  const [userDetails, setUserDetails] = useState(null)
  const [profilePictureUrl, setProfilePictureUrl] = useState()
  const { id } = useParams()

  useEffect(() => {
    console.log(id)

    axios
      .get(`http://localhost:3000/api/v1/users/${id}`)
      .then((response) => {
        setUserDetails(response.data)
      })
      .catch((error) => {
        console.error('Error fetching user details:', error)
      })
  }, [id])

  if (!userDetails) {
    return <div>Loading user details...</div>
  }

  return (
    <div className="space-y-6 flex  h-screen bg-white ">
      <div className="border-1 shadow rounded-lg my-5 mx-10">
        {/* <!-- top content --> */}
        <div className="flex rounded-t-lg bg-blue-500 sm:px-2 w-full">
          <div className="h-40 w-40 overflow-hidden sm:rounded-full sm:relative sm:p-0 top-10 left-5 p-3 border">
            {userDetails.profilePicture ? ( // Check if profile picture is available
              <img src={userDetails.profilePicture} alt="Profile" /> // Use the provided profile picture
            ) : (
              <div className="bg-white flex items-center w-full h-full justify-center text-blue-500 text-8xl font-bold  rounded-full">
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

        {/* <!-- main content --> */}
        <div className="p-5 bg-white ">
          <div className="flex flex-col sm:flex-row sm:mt-10">
            <div className="flex flex-col sm:w-1/3">
              {/* <!-- My contact --> */}
              <div className="py-3 sm:order-none order-3">
                <h2 className="text-lg font-poppins font-bold text-blue-500">
                  Details Information
                </h2>
                <div className="border-2 w-20 border-blue-500 my-3"></div>

                <div>
                  {/* firstName */}
                  <div className="flex items-center my-1">
                    <p className="font-bold">
                      FirstName -{' '}
                      <span className="font-medium">
                        {userDetails.firstname}
                      </span>
                    </p>
                  </div>
                  {/* lastName */}
                  <div className="flex items-center my-1">
                    <p className="font-bold">
                      LastName -{' '}
                      <span className="font-medium">
                        {userDetails.lastname}
                      </span>
                    </p>
                  </div>

                  <div className="flex items-center my-1 space-x-2">
                    <i class="fa fa-envelope" aria-hidden="true"></i>

                    <span className="font-medium"> - {userDetails.email}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:w-2/3 order-first sm:order-none sm:-mt-10">
              {/* <!-- About me --> */}
              <div className="py-3">
                <h2 className="text-lg font-poppins font-bold text-blue-500">
                  About Me
                </h2>
                <div className="border-2 w-20 border-blue-500 my-3"></div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Pariatur quo ratione dolores ipsum magni tenetur nobis hic
                  facere consequuntur eaque? Eveniet optio molestiae in autem
                  laudantium quos cum accusantium obcaecati! Lorem ipsum dolor,
                  sit amet consectetur adipisicing elit. Sint, unde culpa
                  consectetur, quas maxime a quisquam harum minima nostrum
                  aspernatur ipsum illum quibusdam eveniet. Ab vel sit assumenda
                  ad laborum. Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Pariatur quo ratione dolores ipsum magni
                  tenetur nobis hic facere consequuntur eaque? Eveniet optio
                  molestiae in autem laudantium quos cum accusantium obcaecati!
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sint, unde culpa consectetur, quas maxime a quisquam harum
                  minima nostrum aspernatur ipsum illum quibusdam eveniet. Ab
                  vel sit assumenda ad laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsUsers
