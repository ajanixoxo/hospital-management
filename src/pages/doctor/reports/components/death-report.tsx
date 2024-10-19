import { DataTable } from "@/components/common/data-table/data-table";
import { BirthReportsToolbar } from "./table-toolbar";
import { useMemo } from "react";
import { BirthReportColumns } from "./table-columns";
import { birthReportsMocked } from "@/test/mock.api";

export default function DeathReport() {
  const columnsMemoized = useMemo(() => BirthReportColumns, []);
  const data = useMemo(() => birthReportsMocked, []);
  return (
    <main className="">
      <DataTable
        columns={columnsMemoized}
        data={data}
        count={0}
        limit={10}
        onRowClick={(row) => {
          alert(JSON.stringify(row.original, null, 2));
        }}
        hasToolbar
        Toolbar={BirthReportsToolbar}
      />
    </main>
  );
}
