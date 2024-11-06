import React, { useState } from "react";


import { FaEdit, FaPrint, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import ConfirmDeleteModal from "./DeleteComfirmModal";
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
  // deleting patient diagnosis
  const [data, setData] = useState(patientData); // Initial patient data
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPatientId, setSelectedPatientId] = useState<number | null>(
    null
  );

  const handleDeletePatientDiagnosis = (id: number) => {
    const updatedPatient = data.filter((patient) => patient.id !== id);
    setData(updatedPatient);
    closeModal();
  };

  const openModal = (id: number) => {
    setSelectedPatientId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPatientId(null);
    setIsModalOpen(false);
  };

  const confirmDelete = () => {
    if (selectedPatientId !== null) {
      handleDeletePatientDiagnosis(selectedPatientId);
    }
  };

  return (
    <div className="w-full" style={{ overflowX: "auto" }}>
      <table className="w-full">
        <thead className="bg-slate-200 py-10 h-12 ">
          <tr>
            <th className="font-normal">REPORT NUMBER</th>
            <th className="font-normal">PATIENT</th>
            <th className="font-normal">DOCTOR</th>
            <th className="font-normal">DIAGNOSIS CATEGORY</th>
            <th className="font-normal">CREATED ON</th>
            <th className="font-normal">ACTION</th>
          </tr>
        </thead>
        <tbody className="w-full p-3">
          {data.length > 0 ? (
            data.map((items) => (
              <tr className="px bg-white mt-10 w-full border" key={items.id}>
                <td className="p-6">
                  <a
                    href=""
                    className="text-sm px-2 py-2 bg-blue-300 rounded-md"
                  >
                    {items.reportNum}
                  </a>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <img src={items.profileImg} alt="" className="w-11" />
                    <div>
                      <span className="text-purple-500">
                        {items.patientName}
                      </span>
                      <p className="text-sm">{items.patientEmail}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <img src={items.profileImg} alt="" className="w-11" />
                    <div>
                      <span className="text-purple-500">
                        {items.doctorName}
                      </span>
                      <p className="text-sm">{items.doctorEmail}</p>
                    </div>
                  </div>
                </td>
                <td className="text-sm" style={{ width: "180px" }}>
                  {items.diagCategory}
                </td>
                <td className="text-sm px-2 py-2 rounded-md">
                  {items.createdOn}
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
                      onClick={() => openModal(items.id)}
                    >
                      <FaTrash />
                    </span>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="text-center py-4">
                <h3 className="font-bold text-2xl">No patient diagnosis</h3>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <ConfirmDeleteModal
        isOpen={isModalOpen}
        onConfirm={confirmDelete}
        onCancel={closeModal}
      />
    </div>
  );
};

export default DiagnosisTable;
