import axios from "axios";
import React, { useEffect, useState } from "react";

function Table() {
  const [show, setShow] = useState(null);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    // const data = Axios.get("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log(json);
    //     setDatas(response);
    //   });
    getUsers();
  }, []);

  function getUsers() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      // const persons = res.data;
      setUsers(res.data);
      console.log(res.data);
    });
  }
  return (
    <>
      <div className="w-full">
        <div className=" mx-5 my-4 ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            {/* //todo Header of Table */}
            <thead className="text-xs text-black uppercase  bg-gray-200">
              <tr>
                <th scope="col" className="px-6 py-3">
                  FullName
                </th>
                <th scope="col" className="px-6 py-3">
                  Rate
                </th>
                <th scope="col" className="px-6 py-3">
                  Type Of Food
                </th>
                <th scope="col" className="px-6 py-3">
                  Time
                </th>
                <th scope="col" className="px-6 py-3">
                  Info
                </th>
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
                  <td className="px-6 py-4">4 STAR</td>
                  <td className="px-6 py-4">Special Shiro</td>
                  <td className="px-6 py-4">12/06/2023</td>
                  <td className="px-6 py-4">
                    <a
                      href=""
                      className="bg-gray-500 text-white p-3 rounded hover:text-gray-800 hover:bg-gray-300"
                    >
                      Details
                    </a>
                  </td>
                </tr>
                {/* <tr className="bg-gray-100">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-900"
                  >
                    Alex Weldu
                  </th>
                  <td className="px-6 py-4">5 START</td>
                  <td className="px-6 py-4">Special Pizza</td>
                  <td className="px-6 py-4">01/06/2023</td>
                  <td className="px-6 py-4 ">
                    <a
                      href=""
                      className="bg-gray-500 text-white p-3 rounded hover:text-gray-800 hover:bg-gray-300"
                    >
                      Details
                    </a>
                  </td>
                </tr> */}
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}

export default Table;
