import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import NewUserModal from "../modal/NewUserModal";
function MainContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const demoData = [
    {
      id: 1,
      name: "Taiwo Isaac",
      email: "taiwoisaac@email.com",
      role: "Administrator",
    },
    {
      id: 2,
      name: "Seun Fagbemi",
      email: "seunfagbemi@email.com",
      role: "Sales Manager",
    },
    {
      id: 3,
      name: "Dare Oyejide",
      email: "dareoyejide@email.com",
      role: "Sales Manager",
    },
    {
      id: 4,
      name: "StudiMatch",
      email: "studimatch@email.com",
      role: "Sales Representative",
    },
  ];
  const [users, setUsers] = useState(demoData);

  const openModalHandler = () => {
    setIsModalOpen(true);
  };
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://cac8cf21b36a92b26bad.free.beeceptor.com/api/users/"
  //       );
  //       console.log(response.data);
  //       setUsers(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchUsers();
  // }, []);
  return (
    <>
      {isModalOpen && <NewUserModal setIsModalOpen={setIsModalOpen} />}
      <main className="flex-1 px-14 py-10">
        <h6 className="font-satoshi text-[0.9rem] text-[#94A3B8] mb-[1.5rem]">
          Settings / Users & Roles Settings
        </h6>
        <h1 className="text-[1.5rem] font-semibold mb-[0.4rem]">
          Users & Roles
        </h1>
        <h4 className="font-satoshi text-[1rem] text-[#94A3B8] mb-[1.1rem]">
          Manage all users in your business
        </h4>

        <div className="flex items-center space-x-10">
          <h4
            style={{ borderBottom: "2px solid #0D6EFD" }}
            className="font-satoshi text-[1.2rem] py-2 font-bold text-[#0D6EFD] cursor-pointer "
          >
            Users
          </h4>
          <h4 className="font-satoshi text-[1.2rem] text-[#94A3B8] py-2 cursor-pointer ">
            Roles
          </h4>
        </div>

        <div className=" bg-[#FFFFFF] Z-[-10] p-4 mt-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <input
                type="text"
                placeholder="Search here..."
                className="w-[18.3rem] p-2 pl-10 rounded border focus:outline-none"
              />
              <svg
                className="absolute left-[20.5rem] mt-[-1.8rem]"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8533 15.5L10.1866 10.8333M11.7422 6.94444C11.7422 9.95133 9.3046 12.3889 6.29772 12.3889C3.29083 12.3889 0.853271 9.95133 0.853271 6.94444C0.853271 3.93756 3.29083 1.5 6.29772 1.5C9.3046 1.5 11.7422 3.93756 11.7422 6.94444Z"
                  stroke="#475367"
                  stroke-width="1.67"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="px-4 py-2 border flex items-center gap-2 rounded">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33337 5.00002C3.33337 4.53978 3.70647 4.16669 4.16671 4.16669H15.8334C16.2936 4.16669 16.6667 4.53978 16.6667 5.00002C16.6667 5.46026 16.2936 5.83335 15.8334 5.83335H4.16671C3.70647 5.83335 3.33337 5.46026 3.33337 5.00002Z"
                  fill="#334155"
                />
                <path
                  d="M5.00004 10C5.00004 9.53978 5.37314 9.16669 5.83337 9.16669H14.1667C14.6269 9.16669 15 9.53978 15 10C15 10.4603 14.6269 10.8334 14.1667 10.8334H5.83337C5.37314 10.8334 5.00004 10.4603 5.00004 10Z"
                  fill="#334155"
                />
                <path
                  d="M7.50004 14.1667C7.0398 14.1667 6.66671 14.5398 6.66671 15C6.66671 15.4603 7.0398 15.8334 7.50004 15.8334H12.5C12.9603 15.8334 13.3334 15.4603 13.3334 15C13.3334 14.5398 12.9603 14.1667 12.5 14.1667H7.50004Z"
                  fill="#334155"
                />
              </svg>
              <h5 className="font-satoshi font-bold">Filter</h5>
            </div>
          </div>
          <button
            onClick={openModalHandler}
            className="px-4 py-3  bg-[#0D6EFD] flex items-center gap-2 text-white font-satoshi text-[0.9rem] font-bold rounded"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 15.9375H9.00007C10.8394 15.9354 12.6027 15.2038 13.9033 13.9033C15.2038 12.6027 15.9354 10.8394 15.9375 9.00007V9C15.9375 7.62789 15.5306 6.2866 14.7683 5.14573C14.006 4.00487 12.9225 3.11567 11.6549 2.59059C10.3872 2.0655 8.99231 1.92812 7.64656 2.1958C6.30082 2.46349 5.06468 3.12422 4.09445 4.09445C3.12422 5.06467 2.46349 6.30082 2.19581 7.64656C1.92812 8.9923 2.06551 10.3872 2.59059 11.6549C3.11567 12.9225 4.00487 14.006 5.14573 14.7683C6.2866 15.5306 7.6279 15.9375 9 15.9375ZM9.625 9.5625H9.5625V9.625V12.125C9.5625 12.2742 9.50324 12.4173 9.39775 12.5227C9.29226 12.6282 9.14919 12.6875 9 12.6875C8.85082 12.6875 8.70775 12.6282 8.60226 12.5227C8.49677 12.4173 8.4375 12.2742 8.4375 12.125V9.625V9.5625H8.375H5.875C5.72582 9.5625 5.58275 9.50324 5.47726 9.39775C5.37177 9.29226 5.3125 9.14918 5.3125 9C5.3125 8.85082 5.37177 8.70774 5.47726 8.60225C5.58275 8.49676 5.72582 8.4375 5.875 8.4375H8.375H8.4375V8.375V5.875C8.4375 5.72582 8.49677 5.58274 8.60226 5.47725C8.70775 5.37176 8.85082 5.3125 9 5.3125C9.14919 5.3125 9.29226 5.37176 9.39775 5.47725C9.50324 5.58274 9.5625 5.72582 9.5625 5.875V8.375V8.4375H9.625H12.125C12.2742 8.4375 12.4173 8.49676 12.5228 8.60225C12.6282 8.70774 12.6875 8.85082 12.6875 9C12.6875 9.14918 12.6282 9.29226 12.5228 9.39775C12.4173 9.50324 12.2742 9.5625 12.125 9.5625H9.625ZM4.52072 2.29628C5.84658 1.41036 7.40537 0.937507 8.99997 0.9375C11.1376 0.939766 13.187 1.78994 14.6985 3.30146C16.2101 4.813 17.0602 6.86243 17.0625 9.00007C17.0625 10.5947 16.5896 12.1534 15.7037 13.4793C14.8178 14.8052 13.5586 15.8385 12.0854 16.4488C10.6122 17.059 8.99106 17.2187 7.42709 16.9076C5.86312 16.5965 4.42652 15.8286 3.29896 14.701C2.17139 13.5735 1.40352 12.1369 1.09242 10.5729C0.781329 9.00894 0.940993 7.38784 1.55122 5.91461C2.16146 4.44139 3.19485 3.1822 4.52072 2.29628Z"
                fill="white"
                stroke="white"
                stroke-width="0.125"
              />
            </svg>
            New Users
          </button>
        </div>

        <table className="min-w-full border-b rounded-lg font-satoshi">
          <thead className="text-[#1D2739] text-[0.75rem]">
            <tr>
              <th className="py-3 px-4 border-b">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Name
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </th>
              <th className="py-3 px-4 border-b">
                <div className="flex items-center">
                  Email Address
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </th>
              <th className="py-3 px-4 border-b">
                <div className="flex items-center">
                  Role
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </th>
              <th className="py-3 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="bg-white text-[0.9rem]">
                <td className="py-5 px-4 border-b flex items-center">
                  <input type="checkbox" className="mr-2" />
                  {user.name}
                </td>
                <td className="py-5 px-4 border-b">{user.email}</td>
                <td className="py-5 px-4 border-b">
                  <span
                    className={`px-4 py-1 rounded ${
                      user.role === "Administrator"
                        ? "bg-blue-100 text-blue-700"
                        : user.role === "Sales Manager"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="py-4 px-4 border-b">
                  <button className="text-blue-500 font-semi-bold hover:underline">
                    Edit
                  </button>
                  <button className="text-red-500 hover:underline ml-2">
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}

export default MainContent;
