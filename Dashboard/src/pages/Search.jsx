/* eslint-disable react/prop-types */

import { useState } from 'react'

// eslint-disable-next-line react/prop-types
const Search = ({ users, setter }) => {
  const [search, setSearch] = useState()

  const searchHandel = () => {
    // eslint-disable-next-line react/prop-types
    const usersFiltered = users.filter((item) =>
      item.firstname.toLowerCase().includes(search.toLowerCase())
    )

    setter(usersFiltered)
  }
  return (
    <div className="px-4 xl:px-0 py-10">
      <div className="flex flex-col lg:flex-row flex-wrap">
        <div className="mt-4 lg:mt-0 lg:w-3/5">
          <div>
            <h1 className="text-2xl ml-2 lg:ml-0 lg:text-3xl font-bold text-gray-500 tracking-normal lg:w-11/12">
              List Of Users
            </h1>
          </div>
        </div>
        <div className="lg:w-2/5 flex mt-10 ml-2 lg:ml-0 lg:mt-0 lg:justify-end">
          <div className="pt-2 relative  text-gray-600">
            <input
              className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
              onChange={(e) => {
                setSearch(e.target.value)
                if (search == '') {
                  const usersFiltered = users.filter((item) =>
                    item.firstname.toLowerCase().includes(search.toLowerCase())
                  )

                  setter(usersFiltered)
                } else {
                  console.log('Enter some text')
                }
              }}
              onClick={searchHandel}
            />
            <button
              type="submit"
              className="focus:ring-2 focus:ring-offset-2 text-gray-600 focus:text-indigo-700 focus:rounded-full  focus:bg-gray-100 focus:ring-indigo-700 bg-white focus:outline-none absolute right-0 top-0 mt-5 mr-4"
              onClick={searchHandel}
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
  )
}

export default Search
