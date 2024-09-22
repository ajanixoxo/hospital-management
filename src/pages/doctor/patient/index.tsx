import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DownloadIcon, FilterIcon } from "lucide-react";
import { useState, useEffect, Suspense } from "react";
import { PatientCard, type Patient } from "./components/patient-card";
import useDebounce from "@/components/common/hooks/use-debounce";

export default function Patient() {
  const [viewPatients, setViewPatients] = useState<Patient[]>();
  const [editedPatients, setEditedPatients] = useState<Patient[]>();
  const [searchValue, setSearchValue] = useState<string>("");
  const debouncedSearchValue = useDebounce(searchValue, 500);

  function filterPatients(
    patients: Patient[] | undefined,
    searchValue: string
  ) {
    // filter based on fullName for now
    const filter = patients?.filter((patient) => {
      return patient.fullName.toLowerCase().includes(searchValue.toLowerCase());
    });
    return filter;
  }
  useEffect(() => {
    (async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
        method: "GET",
        headers: {
          "x-api-key": import.meta.env.VITE_API_KEY satisfies string,
        },
      });
      const data = await res.json();
      setViewPatients(data);
    })();
  }, []);

  useEffect(() => {
    // if no search value, return all patients
    if (!debouncedSearchValue) {
      setEditedPatients(viewPatients);
      return;
    }
    // filter patients based on search value
    const filteredPatients = filterPatients(viewPatients, debouncedSearchValue);
    setEditedPatients(filteredPatients);
  }, [viewPatients, debouncedSearchValue]);

  return (
    <main className="rounded-lg flex flex-col w-full bg-white min-h-full p-4 space-y-6">
      <header className="w-full flex flex-col space-y-6">
        <p className="font-medium text-3xl">Patient List</p>
        <div className="flex justify-between items-center">
          <Input
            type="text"
            placeholder="Search patients"
            className="w-1/3 rounded-xl bg-white"
            onChange={(e) => {
              setSearchValue(e.currentTarget.value);
            }}
          />
          <aside className="flex items-center space-x-5">
            <Button
              className="flex space-x-2 items-center border"
              variant={`ghost`}
            >
              <DownloadIcon size={18} className="text-neutral-700" />
              <p className="text-xs font-semibold text-neutral-700">
                Download Report
              </p>
            </Button>
            <Button
              className="flex space-x-2 items-center border"
              variant={`ghost`}
            >
              <FilterIcon size={18} className="text-neutral-700" />
              <p className="text-xs font-semibold text-neutral-700">Filter</p>
            </Button>
          </aside>
        </div>
      </header>
      <section className="flex-1 grid grid-cols-5 gap-4 self-start">
        {editedPatients?.map((patient) => (
          <Suspense
            fallback={<div className="w-full bg-rose-300">Loading...</div>}
          >
            <PatientCard
              key={patient.id}
              id={patient.id}
              fullName={patient.fullName}
              avatar={patient.avatar}
              dateOfBirth={patient.dateOfBirth}
              address={patient.address}
              weight={patient.weight}
              bloodPressure={patient.bloodPressure}
              bloodGlucose={patient.bloodGlucose}
            />
          </Suspense>
        ))}
      </section>
      <footer className="py-4"></footer>
    </main>
  );
}
