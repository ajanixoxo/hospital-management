import React from "react";
import { FaSearch } from "react-icons/fa";
import Patientlist from "./doctor/diagnosis/components/PatientTable";
import { useNavigate } from "react-router-dom";

const Diagnosis: React.FC = () => {
  const navigate = useNavigate();

  // Example patients data
  const patients = [
    {
      id: 1,
      reportNum: "RPT-001",
      patientName: "John Doe",
      patientEmail: "john@example.com",
      doctorName: "Dr. Smith",
      doctorEmail: "drsmith@example.com",
      diagCategory: "Cardiology",
      createdOn: "2024-10-22",
      profileImg: "https://via.placeholder.com/150", // Dummy profile image
    },
    {
      id: 2,
      reportNum: "RPT-002",
      patientName: "Jane Doe",
      patientEmail: "jane@example.com",
      doctorName: "Dr. Brown",
      doctorEmail: "drbrown@example.com",
      diagCategory: "Neurology",
      createdOn: "2024-10-21",
      profileImg: "https://via.placeholder.com/150",
    },
  ];

  const handleEdit = (id: number) => {
    // Navigate to the edit page for the selected patient
    navigate(`/doctor/edit-diagnosis/${id}`);
  };

  return (
    <div className="w-full p-5">
      <div className="top-row flex items-center justify-between">
        <div className="relative">
          <span className="absolute top-3 left-3">
            <FaSearch />
          </span>
          <input
            type="text"
            className="px-3 py-2 rounded-sm border border-black"
            style={{ width: "300px" }}
          />
        </div>
        <button
          type="button"
          className="bg-purple-700 px-5 py-2 rounded-sm text-white"
        >
          New Patient Diagnosis Test
        </button>
      </div>
      <div className="patient-list w-full mt-7">
        <div>
          {/* Pass both patients data and onEditClick handler */}
          <Patientlist patients={patients} onEditClick={handleEdit} />
        </div>
      </div>
    </div>
  );
};

export default Diagnosis;
