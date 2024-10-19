import { DataTableColumnHeader } from "@/components/common/data-table/data-table-column-header";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ColumnDef } from "@tanstack/react-table";
import { SideDrawer } from "@/components/common/dialog/side-drawer";
import { AppDeleteIcon, AppEditIcon } from "@/components/common/icons";
import ViewPatientDetails from "../../patient/components/view-patient-details";
import { Link } from "react-router-dom";

interface User {
  name: string;
  avatar: string;
  email: string;
}
/**
 * @typedef BirthReportsType
 * This type works as a model for the Birth Reports, Death Reports and Operation Reports
 */
interface BirthReportsType {
  caseId: string;
  patient: User;
  doctor: User;
  date: string;
}
interface InvestigationReportsType {
  user: User;
  date: string;
  title: string;
  status: string;
  attachment: string; // URL to the attachment
}
/**
 * @typedef BirthReportsType
 * This type works as a model for the Birth Reports, Death Reports and Operation Reports
 */
export const BirthReportColumns: ColumnDef<BirthReportsType>[] = [
  {
    accessorKey: "caseId",
    enableSorting: false,
    enableHiding: true,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="CASE ID" />
    ),
    cell: ({ row }) => {
      return <Badge className="text-ellipsis">{row.original.caseId}</Badge>;
    },
  },
  {
    accessorKey: "patient",
    enableSorting: false,
    enableHiding: true,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="PATIENT" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage src={`https://github.com/shadcn.png`} />
            {/* <AvatarImage src={row.original.patient.avatar} /> */}
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="flex flex-col space-y-1">
            <span className="text-nowrap">{row.original.patient.name}</span>
            <span className="text-nowrap">{row.original.patient.email}</span>
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "doctor",
    enableSorting: false,
    enableHiding: true,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="DOCTOR" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage src={`https://github.com/shadcn.png`} />
            {/* <AvatarImage src={row.original.patient.avatar} /> */}
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="flex flex-col space-y-1">
            <span className="text-nowrap">{row.original.doctor.name}</span>
            <span className="text-nowrap">{row.original.doctor.email}</span>
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "date",
    enableSorting: false,
    enableHiding: true,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="DATE" />
    ),
    cell: ({ row }) => {
      return <span className="text-ellipsis">{row.original.date}</span>;
    },
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
              className="md:max-w-4xl border-2 border-_p-ocean-green rounded-l-xl"
              SheetTrigger={<AppEditIcon onClick={undefined} />}
            />
            <AppDeleteIcon onClick={undefined} />
          </div>
        </>
      );
    },
  },
];

export const InvestigationReportColumns: ColumnDef<InvestigationReportsType>[] =
  [
    {
      accessorKey: "user",
      enableSorting: false,
      enableHiding: true,
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="USER" />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex items-center space-x-2">
            <Avatar>
              <AvatarImage src={`https://github.com/shadcn.png`} />
              {/* <AvatarImage src={row.original.patient.avatar} /> */}
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="flex flex-col space-y-1">
              <span className="text-nowrap">{row.original.user.name}</span>
              <span className="text-nowrap">{row.original.user.email}</span>
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "date",
      enableSorting: false,
      enableHiding: true,
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="DATE" />
      ),
      cell: ({ row }) => {
        return <span className="text-ellipsis">{row.original.date}</span>;
      },
    },
    {
      accessorKey: "title",
      enableSorting: false,
      enableHiding: true,
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="TITLE" />
      ),
      cell: ({ row }) => {
        return <span className="text-ellipsis">{row.original.title}</span>;
      },
    },
    {
      accessorKey: "status",
      enableSorting: false,
      enableHiding: true,
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="STATUS" />
      ),
      cell: ({ row }) => {
        return <span className="text-ellipsis">{row.original.status}</span>;
      },
    },
    {
      accessorKey: "attachment",
      enableSorting: false,
      enableHiding: true,
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="ATTACHMENT" />
      ),
      cell: ({ row }) => {
        return (
          <Link
            to={row.original.attachment}
            className="text-ellipsis text-_o-untramarine-blue text-center hover:underline"
          >{`Download`}</Link>
        );
      },
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
                className="md:max-w-4xl border-2 border-_p-ocean-green rounded-l-xl"
                SheetTrigger={<AppEditIcon onClick={undefined} />}
              />
              <AppDeleteIcon onClick={undefined} />
            </div>
          </>
        );
      },
    },
  ];
