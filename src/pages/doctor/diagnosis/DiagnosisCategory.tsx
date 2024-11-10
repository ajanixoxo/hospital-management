// import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { FaTrash, FaSearch, FaEdit } from "react-icons/fa";
import ConfirmDeleteModal from "./components/DeleteComfirmModal";
import NewDiagnosisCategoryModal from "./components/NewDiagnosisCategoryModal";

const DiagnosisCategory = () => {
  const tableData = [
    {
      id: 1,
      DiagnosisCategory: "iwer",
    },
    {
      id: 2,
      DiagnosisCategory: "iwer",
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newModal, setNewModal] = useState(false)
  const [data, setData] = useState(tableData);

  const [selectedPatientId, setSelectedPatientId] = useState<number | null>(
    null
  );

  const [activeTab, setActiveTab] = useState(1);
  const handleActiveTab = (index: number) => {
    setActiveTab(index);
  };
  const openNewModal = () => {
    setNewModal(true)
  }
  const closeNewModal = () => {
    setNewModal(false)

  }
  const openModal = (id: number) => {
    setSelectedPatientId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPatientId(null);
    setIsModalOpen(false);
  };
  const handleDeletePatientDiagnosis = (id: number) => {
    const updatedPatient = data.filter((patient) => patient.id !== id);
    setData(updatedPatient);
    closeModal();
  };
  const confirmDelete = () => {
    if (selectedPatientId !== null) {
      handleDeletePatientDiagnosis(selectedPatientId);
    }
  };

  return (
    <div className="w-full p-5">
      <div className="flex gap-3 mb-3">
        <Link
          to={"/doctor/diagnosis-category"}
          onClick={() => handleActiveTab(1)}
          className={activeTab === 1 ? "pb-2 border-b-2 border-b-blue-700" : ""}
        >
          Diagnosis Category
        </Link>
        <Link
          to={"/doctor/diagnosis"}
          onClick={() => handleActiveTab(2)}
          className={activeTab === 2 ? "pb-2 border-b-2 border-b-blue-700" : ""}
        >
          Diagnosis Test
        </Link>
      </div>
      <div className="top-row flex items-center justify-between">
        <div className="relative">
          <span className="absolute top-3 left-3">
            <FaSearch />
          </span>
          <input
            type="text"
            className="px-8 py-2 rounded-sm border border-black"
            style={{ width: "300px" }}
            placeholder="Search"
            // onChange={handleSearchDiagnosis}
          />
        </div>
        <button
          type="button"
          className="bg-blue-600 px-5 py-2 rounded-sm text-white"
        >
          <Link to={""} onClick={() => openNewModal()}>New Diagnosis Category</Link>
        </button>
      </div>
      <table className="w-full mt-3">
        <thead className="bg-slate-200 h-12">
          <tr className="flex justify-between">
            <th className="font-normal px-3 py-2 text-left">
              Diagnosis Category
            </th>
            <th className="font-normal px-3 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr className="bg-white border-b flex justify-between py-3 mb-2">
              <td className="px-3 py-2">iwer</td>
              <td className="px-3 py-2 flex items-center gap-2">
                <span className="text-blue-600 cursor-pointer">
                  <Link to={``}>
                    <FaEdit />
                  </Link>
                </span>
                <span
                  className="text-destructive cursor-pointer"
                  onClick={() => openModal(item.id)}
                >
                  <FaTrash />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ConfirmDeleteModal
        isOpen={isModalOpen}
        onConfirm={confirmDelete}
        onCancel={closeModal}
      />
      <NewDiagnosisCategoryModal isOpen={newModal}
      onClose={closeNewModal}/>
    </div>
  );
};

export default DiagnosisCategory;
