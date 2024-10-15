import { Outlet } from "react-router-dom";
import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaUserMd, FaClipboardList, FaHospital, FaBell } from 'react-icons/fa';


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
        className={`bg-purple-700 text-white p-4 transition-all duration-300 ${
          isSidebarOpen ? 'w-64' : 'w-16'
        } flex flex-col fixed h-full overflow-y-auto`}
      >
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-semibold">
            {isSidebarOpen ? 'Hospital' : 'H'}
          </span>
          <button
            className="text-white text-2xl focus:outline-none"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <nav className="flex-1">
          <ul>
            <li className="flex items-center p-2 hover:bg-purple-600 rounded-md cursor-pointer">
              <FaHome className="mr-3 text-lg" />
              {isSidebarOpen && <span>Dashboard</span>}
            </li>
            <li className="flex items-center p-2 hover:bg-purple-600 rounded-md cursor-pointer">
              <FaUserMd className="mr-3 text-lg" />
              {isSidebarOpen && <span>Doctors</span>}
            </li>
            <li className="flex items-center p-2 hover:bg-purple-600 rounded-md cursor-pointer">
              <FaClipboardList className="mr-3 text-lg" />
              {isSidebarOpen && <span>Appointments</span>}
            </li>
            <li className="flex items-center p-2 hover:bg-purple-600 rounded-md cursor-pointer">
              <FaHospital className="mr-3 text-lg" />
              {isSidebarOpen && <span>Departments</span>}
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 bg-gray-100 transition-all duration-300 ${
          isSidebarOpen ? 'ml-64' : 'ml-16'
        }`}
      >
        {/* Header */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Hospital Management Dashboard</h1>
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
};