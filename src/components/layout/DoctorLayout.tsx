import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaUserMd, FaClipboardList, FaHospital, FaBell, FaTasks, FaUser, FaLock, FaGlobe} from 'react-icons/fa';
import { FaGear } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";

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
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleProfileModal = () => {
    if(isProfileModalOpen === true){
      setIsProfileModalOpen(false)
    }else{
      setIsProfileModalOpen(true)
    }
   
  }


  return (
    <div className="flex h-screen ">
      {/* Sidebar */}
      <div
        className={`bg-purple-700 text-white p-4 transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-16'
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
            <li className="flex items-center p-2 hover:bg-purple-600 rounded-md cursor-pointer">
              <Link to={"/doctor/schedule"} className="flex items-center"> <FaTasks className="mr-3 text-lg" />
                {isSidebarOpen && <span>Schedules</span>}</Link>
            </li>
            <li className="flex items-center p-2 hover:bg-purple-600 rounded-md cursor-pointer">
              <Link to={"/doctor/settings"} className="flex items-center"> <FaGear className="mr-3 text-lg" />
                {isSidebarOpen && <span>Settings</span>}</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 bg-gray-100 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-16'
          }`}
      >
        {/* Header */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Hospital Management Dashboard</h1>
          <div className="flex items-center">
            <FaBell className="text-gray-600 text-2xl mr-6 cursor-pointer" />
            <div className="flex items-center relative">
              <Link to="settings/profile-page">
                <img
                  src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Profile"
                  className="rounded-full w-8 object-cover h-8 mr-2"
                /></Link>
              <button onClick={handleProfileModal } className="text-gray-700 font-medium">Dr. John Doe</button>

 {isProfileModalOpen && (
    <div className="absolute w-[300px] h-[400px] right-0 flex justify-center items-center flex-col top-14 bg-white shadow-lg p-2 gap-5 rounded-lg transition">
    <div className="flex items-center justify-center gap-3 flex-col">
      <div>
        <img src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="" className="rounded-full w-20  object-cover h-20 mr-2" />
      </div>

      <h1 className="font-semibold text-center ">Doctor John Doe</h1>
      <p>johndoe@gmail.com</p>
    </div>
    <div>
    <ul>

      <li className="flex items-center p-2 hover:bg-purple-600 rounded-md cursor-pointer">
        <Link to="/doctor/settings/edit-profile" className="flex items-center"> <FaUser className="mr-3 text-lg" />
          <span>Edit Profile</span>
        </Link>
      </li>
      <li className="flex items-center p-2 hover:bg-purple-600 rounded-md cursor-pointer">
        <Link to={"/doctor/settings/change-password"} className="flex items-center"> <FaLock className="mr-3 text-lg" />
          {isSidebarOpen && <span>Change Password</span>}</Link>
      </li>
      <li className="flex items-center p-2 hover:bg-purple-600 rounded-md cursor-pointer">
        <Link to={"/doctor/settings"} className="flex items-center"> <FaGlobe className="mr-3 text-lg" />
          {isSidebarOpen && <span>Change Language</span>}</Link>
      </li>
      <li className="flex items-center p-2 hover:bg-purple-600 rounded-md cursor-pointer">
        <Link to={"/doctor/settings"} className="flex items-center"> <CiLogout className="mr-3 text-lg" />
          {isSidebarOpen && <span>Logout</span>}</Link>
      </li>
    </ul>

  </div>
  </div>
 )}
            
             
            </div>
          </div>
        </header>

        {/* Content */}
        <Outlet />
      </div>
    </div>
  );
};