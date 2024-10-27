
import React, { useState } from "react";
// import diagnosisData from "@/utils/diagnosis";
import { FaEdit, FaPrint, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Patient {
  id: number;
  reportNum: string;
  patientName: string;
  patientEmail: string;
  doctorName: string;
  doctorEmail: string;
  diagCategory: string;
  createdOn: string;
  profileImg: string;
}

interface PatientsTableProps {
  patientData: Patient[];
}

const DiagnosisTable: React.FC<PatientsTableProps> = ({ patientData }) => {
  const [patients, setPatients] = useState(patientData);
  // deleting patient diagnosis
  const handleDeletePatientDiagnosis = (id: number) => {
    // Delete patient diagnosis logic here
    const updatedPatient = patients.filter((patient) => patient.id !== id);
    setPatients(updatedPatient);
  };
  return (
    <div className="w-full" style={{ overflowX: "auto" }}>
      <table className="w-full ">
        <thead className="bg-slate-200 py-10 h-12 ">
          <tr>
            <th className="font-semibold">
              <div className="">REPORT NUMBER</div>
            </th>
            <th className="font-semibold">
              <div className="">PATIENT</div>
            </th>
            <th className="font-semibold">
              <div className="">DOCTOR</div>
            </th>
            <th className="font-semibold">
              <div className="">DIAGNOSIS CATEGORY</div>
            </th>
            <th className="font-semibold">
              <div className="">CREATED ON</div>
            </th>
            <th className="font-semibold">
              <div className="">ACTION</div>
            </th>
          </tr>
        </thead>
        <tbody className="w-full p-3">
          {patients.map((items) => (
            <tr
              className="px bg-white mt-10 w-full border"
              style={{ marginTop: "20px" }}
              key={items.id}
            >
              <td className="p-6">
                <div>
                  <a
                    href=""
                    className="text-sm px-2 py-2 bg-blue-300 rounded-md"
                  >
                    {items.reportNum}
                  </a>
                </div>
              </td>
              <td>
                <div className="flex items-center gap-2">
                  <img src={items.profileImg} alt="" className="w-11" />
                  <div className="flex-col">
                    <span className="text-purple-500">{items.patientName}</span>
                    <p className="text-sm">{items.patientEmail}</p>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex items-center gap-2">
                  <img src={items.profileImg} alt="" className="w-11" />
                  <div className="flex-col">
                    <span className="text-purple-500">{items.doctorName}</span>
                    <p className="text-sm">{items.doctorEmail}</p>
                  </div>
                </div>
              </td>
              <td>
                <div>
                  <p className="text-sm" style={{ width: "180px" }}>
                    {items.diagCategory}
                  </p>
                </div>
              </td>
              <td>
                <div>
                  <span className="text-sm px-2 py-2 bg-blue-300 rounded-md">
                    {items.createdOn}
                  </span>
                </div>
              </td>
              <td>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500 cursor-pointer">
                    <FaPrint />
                  </span>
                  <span className="text-purple-500 cursor-pointer">
                    <Link to={`/doctor/edit-diagnosis/${items.id}`}>
                      <FaEdit />
                    </Link>
                  </span>
                  <span
                    className="text-destructive cursor-pointer"
                    onClick={() => handleDeletePatientDiagnosis(items.id)}
                  >
                    <FaTrash />
                  </span>
                </div>
              </td>
            </tr>
          ))}
          {patients.length === 0 && (
            <h3 className="font-bold text-2xl text-center mt-4">
              {" "}
              No patient diagnosis{" "}
            </h3>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DiagnosisTable;