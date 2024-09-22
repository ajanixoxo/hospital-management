import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { DataTable } from "@/components/common/data-table/data-table";
import { ColumnsMedicalReports, MedicalReportsType } from "./columns";
import { useEffect, useMemo, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Fieldset } from "@/components/common/field";

export default function ViewPatientDetails() {
  const [medicalReports, setMedicalReports] = useState<MedicalReportsType[]>();

  const medicalReportColumns = useMemo(() => ColumnsMedicalReports(), []);
  useEffect(() => {
    (async () => {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/medicalreports`,
        {
          method: "GET",
        }
      );
      const data = await res.json();
      setMedicalReports(data);
    })();
  }, []);

  return (
    <ScrollArea className="h-full w-full pr-4">
      <main className="flex flex-col space-y-6 h-full">
        <header className="flex space-x-3 items-center">
          <Avatar className="size-20">
            <AvatarImage
              onLoadingStatusChange={(status) => {
                console.log("loading status: ", status);
              }}
              src="https://github.com/shadcn.png"
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="flex space-y-3 flex-col">
            <p className="font-bold text-xl">{`Reidehi Sharma`}</p>
            <p className="font-semibold text-_p-ocean-green text-sm ">{`Patient`}</p>
          </span>
        </header>
        <footer className="flex space-y-8 w-full flex-col ">
          <section className="p-6 flex flex-col space-y-8 rounded-xl border border-dashed border-_p-ocean-green">
            <header className="font-bold text-base text-_s-midnight-green">
              Personal details
            </header>
            <section className="flex flex-col space-y-5">
              <div className="flex items-center space-x-12 w-full">
                <Fieldset className="flex-1" label="First name" value="ABC" />
                <Fieldset className="flex-1" label="Last name" value="XYZ" />
              </div>
              <div className="flex items-center space-x-12 w-full">
                <Fieldset
                  className="flex-1"
                  label="Email"
                  value="abc@gmail.com"
                />
                <Fieldset
                  className="flex-1"
                  label="Phone no."
                  value="1111111111"
                />
              </div>
              <div className="flex items-center space-x-12 w-full">
                <Fieldset
                  className="flex-1"
                  label="Date of birth"
                  value="11 February 2001"
                />
                <Fieldset className="flex-1" label="Age" value="22 years" />
              </div>
            </section>
          </section>
          <section className="p-6 flex flex-col space-y-8 rounded-xl border border-dashed border-_p-ocean-green">
            <header className="font-bold text-base text-_s-midnight-green">
              Medicals details
            </header>
            <section className="flex flex-col space-y-5">
              <div className="flex items-center space-x-12 w-full">
                <Fieldset
                  className="flex-1"
                  label="Treatment"
                  value="Eye infection"
                />
                <Fieldset
                  className="flex-1"
                  label="Any ongoing surgeries"
                  value="Lasik surgery"
                />
              </div>
              <div className="flex items-center space-x-12 w-full">
                <Fieldset className="flex-1" label="Blood group" value="B+" />
                <Fieldset
                  className="flex-1"
                  label="Last visited"
                  value="27 February, 2023"
                />
              </div>
              <div className="flex items-center space-x-12 w-full">
                <Fieldset
                  className="flex-1"
                  label="Date of birth"
                  value="11 February 2001"
                />
                <Fieldset className="flex-1" label="Age" value="22 years" />
              </div>
            </section>
          </section>
          <section className="p-6 flex flex-col space-y-8 rounded-xl border border-dashed border-_p-ocean-green">
            <header className="font-bold text-base text-_s-midnight-green">
              Medicals reports
            </header>
            <DataTable
              columns={medicalReportColumns}
              data={medicalReports ?? []}
              count={0}
              limit={0}
            />
          </section>
        </footer>
      </main>
    </ScrollArea>
  );
}
