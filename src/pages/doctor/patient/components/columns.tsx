import { DataTableColumnHeader } from "@/components/common/data-table/data-table-column-header";
import { formatDate } from "@/utils/format";
import { ColumnDef } from "@tanstack/react-table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  AppDeleteIcon,
  AppDownloadIcon,
  AppEditIcon,
  AppEyeOpenIcon,
} from "@/components/common/icons";
import { SideDrawer } from "@/components/common/dialog/side-drawer";
import ViewPatientDetails from "./view-patient-details";

export type AppointmentDataType = {
  id: string;
  name: string;
  mobile: string;
  email: string;
  date: Date;
  time: string;
  status: string;
  avatar?: string;
};
export type MedicalReportsType = {
  id?: string;
  surgery?: string;
  generatedBy?: string;
  dateTime?: string;
};

export const ColumnsAppointment = (): ColumnDef<AppointmentDataType>[] => [
  // {
  //   id: "select",
  //   enableSorting: false,
  //   enableHiding: false,
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && "indeterminate")
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //       className="translate-y-0.5"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //       className="translate-y-0.5"
  //     />
  //   ),
  // },
  {
    accessorKey: "id",
    enableSorting: false,
    enableHiding: false,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Sr no." />
    ),
    cell: ({ row }) => (
      <div className="">
        <span className="text-nowrap py-1">{row.original.id}</span>
      </div>
    ),
  },
  {
    accessorKey: "name",
    enableSorting: false,
    enableHiding: false,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => (
      <div className="flex items-center space-x-2">
        <Avatar>
          <AvatarImage src={row.original.avatar} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="text-nowrap">{row.original.name}</span>
      </div>
    ),
  },
  {
    accessorKey: "mobile",
    enableSorting: false,
    enableHiding: true,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Mobile" />
    ),
    cell: ({ row }) => {
      return <div className="text-ellipsis">{row.original.mobile}</div>;
    },
  },
  {
    accessorKey: "email",
    enableSorting: false,
    enableHiding: true,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => {
      return <div className="">{row.original.email}</div>;
    },
  },
  {
    accessorKey: "date",
    enableSorting: false,
    enableHiding: false,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({ row }) => {
      return <div className="">{formatDate(row.original.date)}</div>;
    },
  },
  {
    accessorKey: "time",
    enableSorting: false,
    enableHiding: false,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Time" />
    ),
    cell: ({ row }) => <div className="w-20">{row.original.time}</div>,
  },
  {
    accessorKey: "status",
    enableSorting: false,
    enableHiding: false,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => <div className="w-20">{row.original.status}</div>,
  },

  {
    id: "actions",
    enableSorting: false,
    enableHiding: false,
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Actions"
        className="text-right"
      />
    ),
    cell: function Cell({}) {
      return (
        <>
          <div className="flex space-x-2 items-center justify-end">
            <SideDrawer
              noHeader
              hasTrigger
              side={`right`}
              SheetContent={<ViewPatientDetails />}
              className="md:max-w-4xl"
              SheetTrigger={<AppEditIcon onClick={undefined} />}
            />
            <AppDeleteIcon onClick={undefined} />
          </div>
        </>
      );
    },
  },
];

export const ColumnsMedicalReports = (): ColumnDef<MedicalReportsType>[] => [
  {
    accessorKey: "id",
    enableSorting: false,
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Id" />;
    },
    cell: ({ row }) => {
      return (
        <div className="">
          <p className="text-sm font-normal">{row.original.id}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "surgery",
    enableSorting: false,
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Surgery" />;
    },
    cell: ({ row }) => {
      return (
        <div className="className">
          <p className="text-sm">{row.original.surgery}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "generatedBy",
    enableSorting: false,
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Generated By" />;
    },
    cell: ({ row }) => {
      return (
        <div className="className">
          <p className="text-sm">{row.original.generatedBy}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "attachements",
    enableSorting: false,
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Attachments" />;
    },
    cell: ({}) => {
      return (
        <>
          <div className="flex space-x-4 items-center">
            <SideDrawer
              noHeader
              hasTrigger
              side={`right`}
              SheetContent={<ViewPatientDetails />}
              className="md:max-w-4xl"
              SheetTrigger={<AppDownloadIcon onClick={undefined} />}
            />
            <AppEyeOpenIcon onClick={undefined} />
          </div>
        </>
      );
    },
  },
];
