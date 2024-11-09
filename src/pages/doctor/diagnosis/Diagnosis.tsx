import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import DiagnosisTable from "./components/DiagnosisTable";
import { Outlet, Link } from "react-router-dom";
import patientData from "@/utils/diagnosis";

const Diagnosis: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchDiagnosis = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchQuery(e.target.value);
  };

  const filterDiagnosis = patientData.filter(
    (patient) =>
      patient.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.reportNum.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.doctorName.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const [activeTab, setActiveTab] = useState(2);
  const handleActiveTab = (index: number) => {
    setActiveTab(index);
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
            onChange={handleSearchDiagnosis}
          />
        </div>
        <button
          type="button"
          className="bg-blue-600 px-5 py-2 rounded-sm text-white"
        >
          <Link to={"/doctor/new-diagnosis"}>New Patient Diagnosis Test</Link>
        </button>
      </div>
      <div className="patient-list w-full mt-7">
        <DiagnosisTable patientData={filterDiagnosis} />
      </div>
      <Outlet />
    </div>
  );
};

export default Diagnosis;
