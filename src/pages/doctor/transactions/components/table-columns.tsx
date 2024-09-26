import { DataTableColumnHeader } from "@/components/common/data-table/data-table-column-header";
import { SideDrawer } from "@/components/common/dialog/side-drawer";
import {
  AppDeleteIcon,
  AppEditIcon,
  AppEyeOpenIcon,
} from "@/components/common/icons";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/utils/format";
import { ColumnDef } from "@tanstack/react-table";
import ViewTransactionDetails from "./view-transaction-details";
import ViewPatientDetails from "../../patient/components/view-patient-details";

// export type Status = "success" | "pending" | "failed";
export type Status = "female" | "male"; // using this to mock the schema of the incoming data from the api,

export type TransactionDataType = {
  id: string;
  name: string;
  appointment: string;
  date: Date;
  status: Status;
  total?: string;
};
function formatStatus(word: string) {
  if (typeof word !== "string") return "";
  return `${word.charAt(0).toLocaleUpperCase()}${word
    .slice(1)
    .toLocaleLowerCase()}`;
}
function renderStatus(status: Status) {
  switch (status) {
    case "male":
      return (
        <Badge variant={`default`} aria-label={status}>
          {formatStatus(status)}
        </Badge>
      );
    case "female":
      return (
        <Badge variant={`destructive`} aria-label={status}>
          {formatStatus(status)}
        </Badge>
      );
    default:
      return (
        <Badge variant={`secondary`} aria-label={status}>
          {formatStatus(status)}
        </Badge>
      );
  }
}
export const ColumnsTransactions = (): ColumnDef<TransactionDataType>[] => [
  {
    accessorKey: "id",
    enableSorting: false,
    enableHiding: true,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
    cell: ({ row }) => (
      <div className="">
        <span className="text-nowrap py-1">{row.original.id}</span>
      </div>
    ),
  },
  {
    accessorKey: "name",
    enableSorting: true,
    enableHiding: true,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Patient" />
    ),
    cell: function ({ row }) {
      return (
        <div className="">
          <span className="text-nowrap py-1">{row.original.name}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "appointment",
    enableHiding: true,
    enableSorting: true,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Appointment" />
    ),
    cell: ({ row }) => (
      <div className="">
        <span className="text-nowrap py-1">{row.original.appointment}</span>
      </div>
    ),
  },
  {
    accessorKey: "date",
    enableHiding: true,
    enableSorting: true,
    header(props) {
      return <DataTableColumnHeader column={props.column} title={`Date`} />;
    },
    cell(props) {
      return <p>{formatDate(props.row.original.date)}</p>;
    },
  },
  {
    accessorKey: "total",
    enableHiding: true,
    enableSorting: true,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Total" />
    ),
    cell: ({ row }) => <p>{row.original.total}</p>,
  },
  {
    accessorKey: "status",
    enableHiding: true,
    enableSorting: true,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => <p>{renderStatus(row.original.status)}</p>,
  },
  {
    accessorKey: "actions",
    enableColumnFilter: false,
    enableHiding: false,
    enableSorting: false,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Actions" />
    ),
    cell: function Cell({}) {
      return (
        <>
          <div className="flex space-x-2 items-center">
            <SideDrawer
              noHeader
              hasTrigger
              side={`right`}
              SheetContent={<ViewTransactionDetails />}
              className="md:max-w-xl"
              SheetTrigger={<AppEyeOpenIcon onClick={undefined} />}
            />
            <AppDeleteIcon onClick={undefined} />
          </div>
        </>
      );
    },
  },
];
