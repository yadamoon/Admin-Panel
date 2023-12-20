import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

function RCPaginate({ items, itemsPerPage, setter }) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);

  useEffect(() => {
    setter(currentItems);
  }, [itemOffset, endOffset, items]);

  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };
  return (
    <div className="flex justify-center  ">
      <ReactPaginate
        containerClassName="flex space-x-2 items-center bg- p-1 px-2 justify-center rounded sm:1/2"
        nextClassName="bg-gray-300 text-xs uppercase py-1 px-2 rounded-lg hover:opacity-75"
        previousClassName="bg-gray-300 text-xs uppercase py-1 px-2 rounded-lg hover:opacity-75"
        activeLinkClassName=" text-white bg-blue-700 border-0"
        pageLinkClassName="w-8 h-8 flex items-center justify-center text-sm rounded-full border  hover:bg-blue-800 hover:text-white"
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
  const [usersDisplayed, setUsersDisplayed] = useState([]);

  const [usersFiltered, setUsersFiltered] = useState([]);
  // const [show, setShow] = useState(null);

  function getUsers() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      // const persons = res.data;
      setUsers(res.data);
      console.log(res.data);
    });
  }

  useEffect(() => {
    getUsers();
  }, []);

  const headTable = ["FullName", "Email", "Address", "Information"];
  return (
    <div className="flex justify-center">
      <div className=" w-full">
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
                    style={{ enableBackground: "new 0 0 56.966 56.966" }}
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
        <div className=" flex  ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            {/* //todo Header of Table */}
            <thead className="text-xs text-black uppercase  bg-gray-200">
              <tr>
                {headTable.map((title) => (
                  <th scope="col" className="px-6 py-3" key={title.id}>
                    {title}
                  </th>
                ))}
              </tr>
            </thead>
            {users.map((person) => (
              <tbody key={person.id}>
                <tr className="bg-gray-100 ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-900"
                  >
                    {person.name}
                  </th>
                  <td className="px-6 py-4"> {person.email}</td>
                  <td className="px-6 py-4">{person.address.city}</td>

                  <td className="px-6 py-4">
                    <a
                      href=""
                      className="bg-blue-500 text-white p-3 rounded hover:opacity-75"
                    >
                      Details
                    </a>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <div className="space-y-2 my-16">
          {users.length > 9 && (
            <RCPaginate
              items={users}
              itemsPerPage={10}
              setter={setUsersDisplayed}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Table;
