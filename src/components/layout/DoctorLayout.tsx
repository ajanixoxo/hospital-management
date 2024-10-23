import { useState } from "react";
import {
  FaBars,
  FaBell,
  FaClipboardList,
  FaHome,
  FaHospital,
  FaTasks,
  FaTimes,
  FaUserMd,
} from "react-icons/fa";
import { Outlet } from "react-router-dom";
<<<<<<< HEAD
import { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaUserMd, FaClipboardList, FaHospital, FaBell,FaDiagnoses  } from 'react-icons/fa';

=======
import NavLinks from "./NavLink";
>>>>>>> 09f25cb8194530d27b63debf322eaab7100d3af8

export default function DoctorLayout() {
  // return (
  //   <main className="h-screen w-screen flex">
  //     <aside className="w-56 h-full"></aside>
  //     <aside className="flex-1 flex flex-col h-full">
  //       <header className="h-16 flex items-center px-4">
  //         <h1 className="text-xl font-bold"></h1>
  //       </header>
  //       <section className="flex-1 p-6 bg-_gray-200">
  //         <Outlet />
  //       </section>
  //     </aside>
  //   </main>
  // );

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`bg-white text-black p-4 transition-all duration-300 shadow ${
          isSidebarOpen ? "w-64" : "w-16"
        } flex flex-col fixed h-full overflow-y-auto`}
      >
        <div className="flex justify-between items-center mb-8 mt-2">
          <span className="text-2xl font-semibold">
            {isSidebarOpen ? "Hospital" : ""}
          </span>
          <button
            className="text-black text-2xl focus:outline-none"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <nav className="flex-1">
          <div>

            <NavLinks isSidebarOpen={isSidebarOpen} href="/doctor/dashboard">
              <FaHome
                className={`${isSidebarOpen ? "md:mr-3 " : ""} text-lg`}
              />
              {isSidebarOpen && <span>Dashboard</span>}
            </NavLinks>

            <NavLinks isSidebarOpen={isSidebarOpen} href="/doctor/patients">
              <FaUserMd
                className={`${isSidebarOpen ? "md:mr-3 " : ""} text-lg`}
              />
              {isSidebarOpen && <span>Patients</span>}
            </NavLinks>

            <NavLinks isSidebarOpen={isSidebarOpen} href="/doctor/appointments">
              <FaClipboardList
                className={`${isSidebarOpen ? "md:mr-3 " : ""} text-lg`}
              />
              {isSidebarOpen && <span>Appointments</span>}
<<<<<<< HEAD
            </li>
            <li className="flex items-center p-2 hover:bg-purple-600 rounded-md cursor-pointer">
              <FaHospital className="mr-3 text-lg" />
              {isSidebarOpen && <span>Departments</span>}
            </li>
            <li className="flex items-center p-2 hover:bg-purple-600 rounded-md cursor-pointer">
              <FaDiagnoses className="mr-3 text-lg" />
              {isSidebarOpen && <span>Diagnosis</span>}
            </li>
          </ul>
=======
            </NavLinks>

            <NavLinks isSidebarOpen={isSidebarOpen} href="/doctor/transactions">
              <FaHospital
                className={`${isSidebarOpen ? "md:mr-3 " : ""} text-lg`}
              />
              {isSidebarOpen && <span>Transactions</span>}
            </NavLinks>

            <NavLinks isSidebarOpen={isSidebarOpen} href="/doctor/schedule">
              <FaTasks
                className={`${isSidebarOpen ? "md:mr-3 " : ""} text-lg`}
              />
              {isSidebarOpen && <span>Schedules</span>}
            </NavLinks>
          </div>
>>>>>>> 09f25cb8194530d27b63debf322eaab7100d3af8
        </nav>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 bg-gray-100 transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-16"
        }`}
      >
        {/* Header */}
        <header className="bg-white shadow-md p-4 py-2 md:py-3 flex justify-between items-center">
          {/* <h1 className="text-xl font-semibold">Hospital Management Dashboard</h1> */}

          <img src="/logo.png" alt="" className="w-10" />
          <div className="flex items-center">
            <FaBell className="text-gray-600 text-2xl mr-6 cursor-pointer" />
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="rounded-full w-10 h-10 mr-2"
              />
              <span className="text-gray-700 font-medium">Dr. John Doe</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <Outlet />
      </div>
    </div>
  );
}
