import React, { useState } from "react";
import EditInputDropDown from "./components/EditInputDropDown";

const EditDiagnosis: React.FC = () => {
  return (
    <div className="w-full p-5 ">
      <h1 className="text-2xl font-semibold mb-6">
        Edit Patient Diagnosis Test
      </h1>
      <div className="container bg-white p-6 h-auto rounded-lg">
        <div className="input-container grid grid-cols-4 gap-5">
          <div>
            <span className="mb-3 font-semibold">Patient</span>
            <EditInputDropDown />
          </div>
          <div>
            <span className="mb-3 font-semibold">Diagnosis Category:</span>
            <EditInputDropDown />
          </div>
          <div>
            <span className="mb-2">Report number:</span>
            <div className="px-3 py-2 w-auto bg-slate-200 rounded-md">
              PM4GO96Q
            </div>
          </div>
          <div className="ml-3">
            <span className="mb-2">Ager:</span>
            <div>
              <input
                type="text"
                placeholder="Age"
                className="px-3 py-2 h-10 rounded-md border border-solid w-60"
              />
            </div>
          </div>
          <div>
            <span className="mb-2">Height:</span>
            <div>
              <input
                type="number"
                className="px-3 py-2 h-10 rounded-md border border-solid w-60"
                placeholder="Height"
              />
            </div>
          </div>
          <div>
            <span className="mb-2">Weight:</span>
            <div>
              <input
                type="number"
                className="px-3 py-2 h-10 rounded-md border border-solid w-60"
                placeholder="Weight"
              />
            </div>
          </div>
          <div>
            <span className="mb-2">Average Glucose:</span>
            <div>
              <input
                type="text"
                className="px-3 py-2 h-10 rounded-md border border-solid w-60"
                placeholder="Average Glucose"
              />
            </div>
          </div>
          <div>
            <span className="mb-2">Fasting Blood Sugar:</span>
            <div>
              <input
                type="text"
                className="px-3 py-2 h-10 rounded-md border border-solid w-60"
                placeholder="Fasting Blood Sugar"
              />
            </div>
          </div>
          <div>
            <span className="mb-2">Urine Sugar:</span>
            <div>
              <input
                type="text"
                className="px-3 py-2 h-10 rounded-md border border-solid w-60"
                placeholder="Urine Sugar"
              />
            </div>
          </div>
          <div>
            <span className="mb-2">Blood Pressure:</span>
            <div>
              <input
                type="text"
                className="px-3 py-2 h-10 rounded-md border border-solid w-60"
                placeholder="Blood Pressure"
              />
            </div>
          </div>
          <div>
            <span className="mb-2">Diabetes:</span>
            <div>
              <input
                type="text"
                className="px-3 py-2 h-10 rounded-md border border-solid w-60"
                placeholder="Diabetes"
              />
            </div>
          </div>
          <div>
            <span className="mb-2">Cholesterol:</span>
            <div>
              <input
                type="text"
                className="px-3 py-2 h-10 rounded-md border border-solid w-60"
                placeholder="Cholesterol"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-lg font-semibold">
            Add other diagnosis property
          </h3>
          <div className="p-2 bg-slate-200 rounded-sm flex items-center justify-around">
            <div>
              <span>#</span>
            </div>
            <div>
              <span>Diagnosis Property Name</span>
            </div>
            <div>
              <span> Diagnosis Property Value</span>
            </div>
            <div>
              <button className="px-4 py-2 h-10 bg-purple-700 text-white rounded-lg mr-3">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="bottom-btn mt-6 ">
          <button className="px-8 py-2 h-10 bg-purple-700 text-white rounded-lg mr-3">
            Save
          </button>
          <button className="px-8 py-2 h-10 bg-slate-200 text-black rounded-lg mr-3">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditDiagnosis;

// {/* Filtered Names */}
// {filteredNames.length > 0 ? (
//   filteredNames.map((name: string, index: number) => (
//     <div key={index} className="py-2 px-4 hover:bg-purple-300">
//       {name}
//     </div>
//   ))
// ) : (
//   <div className="py-2 px-4">No names found</div>
// )}

// )
