import { TabRouter } from "@/components/common/tabs";
import BirthReports from "./components/template";
import { generateId } from "@/utils/helpers";

export default function DoctorReports() {
  return (
    <main className="rounded-lg flex flex-col w-full bg-white h-full p-4 space-y-6">
      <TabRouter
        config={[
          {
            id: generateId(),
            name: "Birth Reports",
            element: <BirthReports />,
          },
          {
            id: generateId(),
            name: "Death Reports",
            element: <div>Death Reports</div>,
          },
          {
            id: generateId(),
            name: "Patient Reports",
            element: <div>Patient Reports</div>,
          },
        ]}
        variant={`line`}
      />
    </main>
  );
}
