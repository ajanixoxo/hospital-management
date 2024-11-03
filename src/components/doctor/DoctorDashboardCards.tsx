import { useState, useEffect } from 'react';
import { FaUsers, FaUserCheck, FaUserClock } from 'react-icons/fa'; // Import icons from react-icons
import { FaClipboard, FaClipboardCheck, FaMoneyBillWave } from 'react-icons/fa6';

const DoctorDashboardCards = () => {
  const [stats, setStats] = useState({
    allUsers: 0,
    activeUsers: 0,
    pendingUsers: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch stats data from the API
    const fetchStats = async () => {
        console.log("fetch")
        setLoading(false)
        setStats({
            allUsers: 0,
            activeUsers: 0,
            pendingUsers: 0,
          })
    };

    fetchStats();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* All Users Card */}
      <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
        <div className="p-4 bg-blue-100 text-blue-500 rounded-full">
          <FaUsers size={24} />
        </div>
        <div className="ml-4">
          <h2 className="text-lg font-semibold">All Users</h2>
          <p className="text-2xl font-bold">{stats.allUsers}</p>
        </div>
      </div>

      {/* Active Users Card */}
      <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
        <div className="p-4 bg-green-100 text-green-500 rounded-full">
          <FaUserCheck size={24} />
        </div>
        <div className="ml-4">
          <h2 className="text-lg font-semibold">Active Users</h2>
          <p className="text-2xl font-bold">{stats.activeUsers}</p>
        </div>
      </div>

      {/* Pending Users Card */}
      <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
        <div className="p-4 bg-yellow-100 text-yellow-500 rounded-full">
          <FaUserClock size={24} />
        </div>
        <div className="ml-4">
          <h2 className="text-lg font-semibold">Pending Users</h2>
          <p className="text-2xl font-bold">{stats.pendingUsers}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
        <div className="p-4 bg-blue-100 text-blue-500 rounded-full">
          <FaMoneyBillWave size={24} />
        </div>
        <div className="ml-4">
          <h2 className="text-lg font-semibold">Total Earnings</h2>
          <p className="text-2xl font-bold">{stats.pendingUsers}</p>
        </div>
      </div>


      <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
        <div className="p-4 bg-green-100 text-green-500 rounded-full">
          <FaClipboardCheck size={24} />
        </div>
        <div className="ml-4">
          <h2 className="text-lg font-semibold">Completed Appointments</h2>
          <p className="text-2xl font-bold">{stats.pendingUsers}</p>
        </div>
      </div>


      <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
        <div className="p-4 bg-yellow-100 text-yellow-500 rounded-full">
          <FaClipboard size={24} />
        </div>
        <div className="ml-4">
          <h2 className="text-lg font-semibold">Pending Appointments</h2>
          <p className="text-2xl font-bold">{stats.pendingUsers}</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboardCards;
