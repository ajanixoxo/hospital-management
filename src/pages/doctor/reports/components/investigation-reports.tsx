import { DataTable } from "@/components/common/data-table/data-table";
import { InvestigationsReportsToolbar } from "./table-toolbar";
import { useMemo } from "react";
import { InvestigationReportColumns } from "./table-columns";
import { investigationReportsMocked } from "@/test/mock.api";

export default function InvestigationReports() {
  const columnsMemoized = useMemo(() => InvestigationReportColumns, []);
  const data = useMemo(() => investigationReportsMocked, []);
  const toolbarMemoized = useMemo(() => InvestigationsReportsToolbar, []);
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
