import { Link } from "react-router-dom";
import EditInputDropDown from "./components/EditInputDropDown";
import { useState } from "react";
import PatientDataList from "@/utils/diagnosis";

import { FaTrash } from "react-icons/fa";
interface DiagnosisProperty {
  name: string;
  value: string;
}
const NewPatientDiagnosis = () => {
  const names = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown"];
  const DiagnosisCategory = [
    "Hypertension",
    "Type 2 Diabetes",
    "Asthma",
    "Low Back Pain",
    "Headache",
    "Depression",
    "Gastroesophageal Reflux Disease",
    "Urinary Tract Infection",
    "Acute Pharyngitis",
    "Viral Infection",
    "Dermatitis",
    "Obesity",
    "Pneumonia",
    "Migraine",
    "Coronary Artery Disease",
    "Osteoarthritis",
    "Fatigue",
    "Otitis Media",
    "Hypothyroidism",
    "Acute Bronchitis",
  ];

  const [selectedName, setSelectedName] = useState(names[0]);
  const [selectedCategory, setSelectedCategory] = useState(
    DiagnosisCategory[0]
  );
  const [formValue, setFormValue] = useState({
    name: selectedName,
    diagnosisCategory: selectedCategory,
    reportNumber: "",
    age: "",
    height: "",
    weight: "",
    averageGlucose: "",
    bloodSugar: "",
    urinSugar: "",
    bloodPressure: "",
    diabetes: "",
    cholesterol: "",
  });
  const [patientData, setPatientData] = useState(PatientDataList);
  const [diagnosisProperTy, setDiagnosisPropery] = useState<
    DiagnosisProperty[]
  >([]);
  const AddOtherDiagnosis = () => {
    setDiagnosisPropery([...diagnosisProperTy, { name: "", value: "" }]);
  };
  const handleAddOtherDiagnosisChanges = (
    index: number,
    field: keyof DiagnosisProperty,
    value: string
  ) => {
    const updatedProperties = [...diagnosisProperTy];
    updatedProperties[index][field] = value;
    setDiagnosisPropery(updatedProperties);
  };
  // DELETING OTHER DIAGNOSIS 
  const deleteDiagnosisProperty = (index: number) => {
    const updatedProperties = diagnosisProperTy.filter((_, i) => i !== index);
    setDiagnosisPropery(updatedProperties);
  };
  // Handling changes for each form field
  const handleChanges = (field: keyof typeof formValue, value: string) => {
    setFormValue((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    const newPatient = {
      id: Date.now(),
      reportNum: formValue.reportNumber || `RPT-${patientData.length + 1}`,
      patientName: formValue.name,
      patientEmail: "example@example.com",
      doctorName: "Dr. Smith",
      doctorEmail: "drsmith@example.com",
      diagCategory: formValue.diagnosisCategory,
      createdOn: new Date().toISOString().split("T")[0],
      profileImg: "https://via.placeholder.com/150",
    };
    setPatientData((prevData) => [...prevData, newPatient]);
    console.log(patientData);
  };

  return (
    <div className="w-full p-5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold mb-6">
          New Patient Diagnosis Test
        </h1>
        <button className="border border-purple-500 px-6 py-2 h-10 rounded-md">
          <Link to={"/doctor/diagnosis"}>Back</Link>
        </button>
      </div>

      <div className="container bg-white p-6 h-auto rounded-lg sm:overflow-auto">
        <div className="input-container grid md:grid-cols-4 sm:grid-cols-1 gap-5">
          <EditInputDropDown
            label="Name"
            options={names}
            selectedOption={selectedName}
            onSelect={(name) => {
              setSelectedName(name);
              handleChanges("name", name);
            }}
          />
          <EditInputDropDown
            label="Diagnosis Category"
            options={DiagnosisCategory}
            selectedOption={selectedCategory}
            onSelect={(category) => {
              setSelectedCategory(category);
              handleChanges("diagnosisCategory", category);
            }}
          />
          <div>
            <span className="mb-6">Report number:</span>
            <div className="px-3 py-2 w-auto bg-slate-200 rounded-md">
              {formValue.reportNumber}
            </div>
          </div>
          {/* Other form inputs */}
          <div className="ml-3">
            <span className="mb-6">Age:</span>
            <div>
              <input
                type="text"
                placeholder="Age"
                className="px-3 py-2 h-10 rounded-md border border-solid w-60"
                value={formValue.age}
                onChange={(e) => handleChanges("age", e.target.value)}
              />
            </div>
          </div>
          <div>
            <span className="mb-6">Height:</span>
            <div>
              <input
                type="number"
                className="px-3 py-2 h-10 rounded-md border border-solid w-60"
                placeholder="Height"
                value={formValue.height}
                onChange={(e) => handleChanges("height", e.target.value)}
              />
            </div>
          </div>
          <div>
            <span className="mb-6">Weight:</span>
            <div>
              <input
                type="number"
                className="px-3 py-2 h-10 rounded-md border border-solid w-60"
                placeholder="Weight"
                value={formValue.weight}
                onChange={(e) => handleChanges("weight", e.target.value)}
              />
            </div>
          </div>
          <div>
            <span className="mb-6">Average Glucose:</span>
            <div>
              <input
                type="text"
                className="px-3 py-2 h-10 rounded-md border border-solid w-60"
                placeholder="Average Glucose"
                value={formValue.averageGlucose}
                onChange={(e) =>
                  handleChanges("averageGlucose", e.target.value)
                }
              />
            </div>
          </div>
          <div>
            <span className="mb-6">Fasting Blood Sugar:</span>
            <div>
              <input
                type="text"
                className="px-3 py-2 h-10 rounded-md border border-solid w-60"
                placeholder="Fasting Blood Sugar"
                value={formValue.bloodSugar}
                onChange={(e) => handleChanges("bloodSugar", e.target.value)}
              />
            </div>
          </div>
          <div>
            <span className="mb-6">Urine Sugar:</span>
            <div>
              <input
                type="text"
                className="px-3 py-2 h-10 rounded-md border border-solid w-60"
                placeholder="Urine Sugar"
                value={formValue.urinSugar}
                onChange={(e) => handleChanges("urinSugar", e.target.value)}
              />
            </div>
          </div>
          <div>
            <span className="mb-6">Blood Pressure:</span>
            <div>
              <input
                type="text"
                className="px-3 py-2 h-10 rounded-md border border-solid w-60"
                placeholder="Blood Pressure"
                value={formValue.bloodPressure}
                onChange={(e) => handleChanges("bloodPressure", e.target.value)}
              />
            </div>
          </div>
          <div>
            <span className="mb-6">Diabetes:</span>
            <div>
              <input
                type="text"
                className="px-3 py-2 h-10 rounded-md border border-solid w-60"
                placeholder="Diabetes"
                value={formValue.diabetes}
                onChange={(e) => handleChanges("diabetes", e.target.value)}
              />
            </div>
          </div>
          <div>
            <span className="mb-6">Cholesterol:</span>
            <div>
              <input
                type="text"
                className="px-3 py-2 h-10 rounded-md border border-solid w-60"
                placeholder="Cholesterol"
                value={formValue.cholesterol}
                onChange={(e) => handleChanges("cholesterol", e.target.value)}
              />
            </div>
          </div>
          {/* Repeat for other fields as needed */}
        </div>
        <div className="mt-3 ml-2 ">
          <h3 className="font-semibold">Add other diagnosis property</h3>
          <div className="flex items-center justify-around p-4 bg-slate-200 rounded-md">
            <h3>#</h3>
            <h3>Diagnosis Property Name</h3>
            <h3>Diagnosis Property Value</h3>
            <button
              className="bg-blue-600 px-3 py-1 rounded-sm text-white"
              onClick={AddOtherDiagnosis}
            >
              Add
            </button>
          </div>

          {diagnosisProperTy.map((property, index) => (
            <div key={index} className="flex items-center justify-around p-4 bg-white rounded-md shadow shadow-slate-200">
              <h3>{index + 1}</h3>
              <input
                type="text"
                placeholder="Diagnosis Property Name"
                className="border px-3 w-64 py-2 rounded-sm outline-none"
                value={property.name}
                onChange={(e) => handleAddOtherDiagnosisChanges(index, 'name', e.target.value)}
              />
              <input
                type="text"
                placeholder="Diagnosis Property Value "
                className="border px-3 w-64 py-2 rounded-sm outline-none"
                value={property.value}
                onChange={(e) => handleAddOtherDiagnosisChanges(index, 'value', e.target.value)}
              />
              <span className="text-destructive cursor-pointer" onClick={()=> deleteDiagnosisProperty(index)}>
                <FaTrash />
              </span>
            </div>
          ))}
        </div>
        <div className="bottom-btn mt-6 ">
          <button
            className="px-8 py-2 h-10 bg-blue-600 text-white rounded-lg mr-3"
            onClick={handleSave}
          >
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

export default NewPatientDiagnosis;
