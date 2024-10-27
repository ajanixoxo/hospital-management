
import { Link } from "react-router-dom";
import EditInputDropDown from "./components/EditInputDropDown";
import { useState } from "react";
const NewPatientDiagnosis = () => {
  const names: string[] = [
    "John Doe",
    "Jane Smith",
    "Alice Johnson",
    "Bob Brown",
  ];
  const DiagnosisCategory: string[] = [
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

  const [selectedName, setSelectedName] = useState<string>(
    names[0] || "Select Name"
  );
  const [selectedCategory, setSelectedCategory] = useState<string>(
    DiagnosisCategory[0] || "Select Diagnosis"
  );
  const [formValue, setFormValue] = useState([
    {
      name: "",
      diagnosisCatergory: "",
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
    },
  ]);
  const hanldeChanges = (index: number, field: string, value: string) => {
    const updateValue = [...formValue];
    updateValue[index] = {
      ...updateValue[index],
      [field]: value,
    };
    setFormValue(updateValue);
  };
  const handleSave = () => {
    console.log("Form Values ", formValue);
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
            onSelect={setSelectedName}
          />
          <EditInputDropDown
            label="Name"
            options={DiagnosisCategory}
            selectedOption={selectedCategory}
            onSelect={setSelectedCategory}
          />
          <div>
            <span className="mb-6">Report number:</span>
            <div className="px-3 py-2 w-auto bg-slate-200 rounded-md">
              PM4GO96Q
            </div>
          </div>
          {formValue.map((form, index) => (
            <>
              <div className="ml-3">
                <span className="mb-6">Age:</span>
                <div>
                  <input
                    type="text"
                    placeholder="Age"
                    className="px-3 py-2 h-10 rounded-md border border-solid w-60"
                    value={form.age}
                    onChange={(e) =>
                      hanldeChanges(index, "age", e.target.value)
                    }
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
                    value={form.height}
                    onChange={(e) =>
                      hanldeChanges(index, "height", e.target.value)
                    }
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
                    value={form.weight}
                    onChange={(e) =>
                      hanldeChanges(index, "Weight", e.target.value)
                    }
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
                    value={form.averageGlucose}
                    onChange={(e) =>
                      hanldeChanges(index, "averageGlucose", e.target.value)
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
                    value={form.bloodSugar}
                    onChange={(e) =>
                      hanldeChanges(
                        index,
                        "Fasting Blood Sugar",
                        e.target.value
                      )
                    }
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
                    value={form.urinSugar}
                    onChange={(e) =>
                      hanldeChanges(index, "Urine Sugar", e.target.value)
                    }
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
                    value={form.bloodPressure}
                    onChange={(e) =>
                      hanldeChanges(index, "Blood Pressure", e.target.value)
                    }
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
                    value={form.diabetes}
                    onChange={(e) =>
                      hanldeChanges(index, "Diabetes", e.target.value)
                    }
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
                    value={form.cholesterol}
                    onChange={(e) =>
                      hanldeChanges(index, "Cholesterol", e.target.value)
                    }
                  />
                </div>
              </div>
            </>
          ))}
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
              <button className="px-4 h-10 bg-purple-700 text-white rounded-lg mr-3">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="bottom-btn mt-6 ">
          <button
            className="px-8 py-2 h-10 bg-purple-700 text-white rounded-lg mr-3"
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
