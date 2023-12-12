import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

// function RCPaginate({ itemsPerPage }) {
//   const [itemOffset, setItemOffset] = useState(0);
//   const endOffset = itemOffset + itemsPerPage;
//   const currentItems = items.slice(itemOffset, endOffset);

//   useEffect(() => {
//     setter(currentItems);
//   }, [itemOffset, endOffset, items]);

//   const pageCount = Math.ceil(items.length / itemsPerPage);
//   const handlePageClick = (event) => {
//     const newOffset = (event.selected * itemsPerPage) % items.length;
//     setItemOffset(newOffset);
//   };

//   return (
//     <div className="flex justify-center ">
//       <ReactPaginate
//         containerClassName="flex space-x-2 items-center bg-white p-1 px-2 justify-center rounded sm:1/2"
//         nextClassName="bg-gray-300 text-xs uppercase py-1 px-2 rounded-lg hover:opacity-75"
//         previousClassName="bg-gray-300 text-xs uppercase py-1 px-2 rounded-lg hover:opacity-75"
//         activeLinkClassName=" text-white bg-teal-700 border-0"
//         pageLinkClassName="w-8 h-8 flex items-center justify-center text-sm rounded-full border  hover:bg-teal-500 hover:text-white"
//         breakLabel="..."
//         nextLabel="next"
//         onPageChange={handlePageClick}
//         initialPage={0}
//         pageCount={pageCount}
//         previousLabel="previous"
//         renderOnZeroPageCount={null}
//       />
//     </div>
//   );
// }

function Table() {
  const [usersDisplayed, setUsersDisplayed] = useState([]);

  const [usersFiltered, setUsersFiltered] = useState([]);
  const [show, setShow] = useState(null);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      // const persons = res.data;
      setUsers(res.data);
      console.log(res.data);
    });
  }

  const headTable = ["FullName", "Email", "Address", "Information"];
  return (
    <>
      <div className="w-full">
        <div className="  ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            {/* //todo Header of Table */}
            <thead className="text-xs text-black uppercase  bg-gray-200">
              <tr>
                {headTable.map((title) => (
                  <th scope="col" className="px-6 py-3">
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
                      className="bg-blue-500 text-white p-3 rounded hover:text-gray-800 hover:opacity-75"
                    >
                      Details
                    </a>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}

export default Table;
