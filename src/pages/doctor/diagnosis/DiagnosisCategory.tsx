import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const DiagnosisCategory = () => {
  const [activeTab, setActiveTab] = useState(1);
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
    </div>
  );
};

export default DiagnosisCategory;
