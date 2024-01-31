/* eslint-disable no-undef */
import React from 'react';
import axios from "axios";
import  { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Search from "../pages/Search";
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function RCPaginate({ items, itemsPerPage, setter }) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  // eslint-disable-next-line react/prop-types
  const currentItems = items.slice(itemOffset, endOffset);
  useEffect(() => {
    setter(currentItems);
  }, [itemOffset, endOffset, items]);
  // eslint-disable-next-line react/prop-types
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    // eslint-disable-next-line react/prop-types
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };
  return (
    <div className="flex justify-center  ">
      <ReactPaginate
        containerClassName="flex space-x-2 items-center bg-white p-1 px-2 justify-center rounded sm:1/2"
        nextClassName="bg-gray-300 text-xs uppercase py-1 px-2 rounded-lg hover:opacity-75"
        previousClassName="bg-gray-300 text-xs uppercase py-1 px-2 rounded-lg hover:opacity-75"
        activeLinkClassName=" text-white bg-blue-600 border-0"
        pageLinkClassName="w-8 h-8 flex items-center justify-center text-sm rounded-full border  hover:bg-blue-500 hover:text-white"
        breakLabel="..."
        nextLabel="next"
        onPageChange={handlePageClick}
        initialPage={0}
        pageCount={pageCount}
        previousLabel="previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
function Table() {
  const [users, setUsers] = useState([]);
  const [displayedUsers, setDisplayedUsers] = useState([]);
  const [usersFiltered, setUsersFiltered] = useState([]);

  function getUsers() {
    try {
      axios.get("http://localhost:3000/api/v1/users").then((res) => {
        setUsers(res.data);
        setUsersFiltered(res.data);

        console.log(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getUsers();
    setDisplayedUsers(users.slice(0, 5));
  }, []);
  const handlePageChange = (newPageItems) => {
    setDisplayedUsers(newPageItems);
  };
  const headTable = ["FullName", "Email", "Information"];
  return (
    <div className="">
      <div className="w-full">
        <Search users={users} setter={setUsersFiltered} />
        <div className="overflow-x-auto justify-center items-center">
          <table className="min-w-full divide-y divide-gray-200 ">
            {/* //todo Header of Table */}
            <thead className="w-full text-sm text-left  text-gray-500 dark:text-gray-400 bg-white">
              <tr>
                {React.Children.toArray(headTable.map(title=> 
                  <th
                    scope="col"
                    className=" px-6 py-3"
                  >
                    {title}
                  </th>
                ))}
              </tr>

            </thead>




            {React.Children.toArray (displayedUsers.map(person=>  
            //TODO Chereka Yared  
              <tbody
                className=" bg-gray-300 px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider  "
              >
                <tr className=' bg-white border-b   hover:bg-gray-50 dark:hover:bg-gray-600"'>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">
                      {person.firstname +" "+person.lastname}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-500">{person.email}</div>
                  </td>
                  
                  <td className="px-6 py-4">
                    <Link  to={'/DetailsUser/' + person._id}
                    
                      className="bg-blue-500 text-white p-3 rounded hover:opacity-75"
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              </tbody>
            ))}





          </table>
        </div>
        <div className="space-y-2 my-16">
          {users.length > 4 && (
            <RCPaginate
              items={usersFiltered}
              itemsPerPage={6}
              setter={setDisplayedUsers}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Table;









