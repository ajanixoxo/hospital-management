import { DataTableColumnHeader } from "@/components/common/data-table/data-table-column-header";
import { formatDate } from "@/utils/format";
import { ColumnDef } from "@tanstack/react-table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

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
          {/* <AvatarImage src={row.original.avatar} /> */}
          <AvatarImage src={`https://github.com/shadcn.png`} />
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
          <div className="flex justify-end">
            <DropdownMenu>
              <DropdownMenuTrigger
                asChild
                className="border-none focus:outline-none"
              >
                <Button
                  aria-label="Open menu"
                  variant="ghost"
                  className="flex size-8 p-0 data-[state=open]:bg-muted"
                >
                  <DotsHorizontalIcon className="size-4" aria-hidden="true" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem>View details</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </>
      );
    },
  },
];
