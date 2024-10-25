import { useState } from "react";
import { Outlet } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUserMd,
  FaClipboardList,
  FaHospital,
  FaBell,
  FaDiagnoses,
  FaTasks,
} from "react-icons/fa";
import NavLinks from "./NavLink";

export default function DoctorLayout() {
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
          <ul>
            <NavLinks isSidebarOpen={isSidebarOpen} href="/doctor/dashboard">
              <FaHome className={`${isSidebarOpen ? "md:mr-3" : ""} text-lg`} />
              {isSidebarOpen && <span>Dashboard</span>}
            </NavLinks>

            <NavLinks isSidebarOpen={isSidebarOpen} href="/doctor/patients">
              <FaUserMd
                className={`${isSidebarOpen ? "md:mr-3" : ""} text-lg`}
              />
              {isSidebarOpen && <span>Patients</span>}
            </NavLinks>

            <NavLinks isSidebarOpen={isSidebarOpen} href="/doctor/appointments">
              <FaClipboardList
                className={`${isSidebarOpen ? "md:mr-3" : ""} text-lg`}
              />
              {isSidebarOpen && <span>Appointments</span>}
            </NavLinks>

            <li className="flex items-center p-2 hover:bg-purple-600 rounded-md cursor-pointer">
              <FaHospital className="mr-3 text-lg" />
              {isSidebarOpen && <span>Departments</span>}
            </li>

            <NavLinks isSidebarOpen={isSidebarOpen} href="/doctor/diagnosis">
              <FaHospital
                className={`${isSidebarOpen ? "md:mr-3" : ""} text-lg`}
              />
              {isSidebarOpen && <span>Diagnosis</span>} 
            </NavLinks>

            <NavLinks isSidebarOpen={isSidebarOpen} href="/doctor/transactions">
              <FaHospital
                className={`${isSidebarOpen ? "md:mr-3" : ""} text-lg`}
              />
              {isSidebarOpen && <span>Transactions</span>}
            </NavLinks>

            <NavLinks isSidebarOpen={isSidebarOpen} href="/doctor/schedule">
              <FaTasks
                className={`${isSidebarOpen ? "md:mr-3" : ""} text-lg`}
              />
              {isSidebarOpen && <span>Schedules</span>}
            </NavLinks>
          </ul>
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
          <img src="/logo.png" alt="Logo" className="w-10" />
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
