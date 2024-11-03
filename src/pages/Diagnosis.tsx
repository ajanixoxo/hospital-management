import { FaSearch } from "react-icons/fa";
import Patientlist from "./doctor/diagnosis/components/patientLsit";

const Diagnosis = () => {
  return (
    <div className="w-full p-5">
      <div
        className="top-row flex items-center justify-between
        "
      >
        <div className="relative ">
          <span className="absolute top-3 left-3">
            <FaSearch />
          </span>
          <input
            type="text"
            className="px-3 py-2 rounded-sm border  border-black  "
            style={{ width: "300px" }}
          />
        </div>
        <button
          type="button"
          className="bg-purple-700 px-5 py-2 rounded-sm text-white"
        >
          New Patient Diagnosis Test{" "}
        </button>
      </div>
      <div className="patient-list w-full mt-7 ">
        <div className=" ">
          <Patientlist />
        </div>
      </div>
    </div>
  );
};

export default Diagnosis;
