import { DataTable } from "@/components/common/data-table/data-table";
import { OperationReportsToolbar } from "./table-toolbar";
import { useMemo } from "react";
import { BirthReportColumns } from "./table-columns";
import { birthReportsMocked } from "@/test/mock.api";

export default function OperationReports() {
  const columnsMemoized = useMemo(() => BirthReportColumns, []);
  const data = useMemo(() => birthReportsMocked, []);
  const toolbarMemoized = useMemo(() => OperationReportsToolbar, []);
  return (
    <main className="">
      <DataTable
        columns={columnsMemoized}
        data={data}
        count={0}
        limit={10}
        onRowClick={() => {}}
        hasToolbar
        Toolbar={toolbarMemoized}
      />
    </main>
  );
}
