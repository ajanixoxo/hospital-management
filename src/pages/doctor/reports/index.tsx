import { TabRouter } from "@/components/common/tabs";
import BirthReports from "./components/birth-report";
import { generateId } from "@/utils/helpers";
import DeathReport from "./components/death-report";
import InvestigationReports from "./components/investigation-reports";
import OperationReports from "./components/operation-reports";

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
            element: <DeathReport />,
          },
          {
            id: generateId(),
            name: "Investigation Reports",
            element: <InvestigationReports />,
          },
          {
            id: generateId(),
            name: "Operation Reports",
            element: <OperationReports />,
          },
        ]}
        variant={`line`}
      />
    </main>
  );
}
