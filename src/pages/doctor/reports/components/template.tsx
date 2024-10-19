import { DataTable } from "@/components/common/data-table/data-table";
import { DoctorReportsTableToolbar } from "./table-toolbar";

export default function BirthReports() {
  return (
    <main className="">
      <DataTable
        columns={[]}
        data={[]}
        count={0}
        limit={10}
        onRowClick={() => {}}
        hasToolbar
        Toolbar={DoctorReportsTableToolbar}
      />
    </main>
  );
}
