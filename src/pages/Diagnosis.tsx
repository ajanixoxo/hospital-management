
import { FaSearch } from "react-icons/fa";
import DiagnosisTable from "./doctor/diagnosis/components/DiagnosisTable";

import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import patientData from "@/utils/diagnosis";
import { useState } from "react";
const Diagnosis: React.FC = () => {
const [searchQuery, setSearchQuery] = useState('')

const handleSearchDiagnosis = (e: React.ChangeEvent<HTMLInputElement>): void => {
  setSearchQuery(e.target.value)
}
const filterDiagnosis = patientData.filter((option) =>
  option.patientName.toLowerCase().includes(searchQuery.toLowerCase())
);

  return (
    <div className="w-full p-5">
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
          className="bg-purple-700 px-5 py-2 rounded-sm text-white"
        >
          <Link to={"/doctor/new-diagnosis"}>New Patient Diagnosis Test</Link>
        </button>
      </div>
      <div className="patient-list w-full mt-7">
        <div>
          {/* Pass both patients data and onEditClick handler */}
          <DiagnosisTable  patientData={searchQuery ? filterDiagnosis : patientData} />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Diagnosis;
