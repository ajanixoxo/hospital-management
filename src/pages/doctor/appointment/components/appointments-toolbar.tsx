import { DialogModal } from "@/components/common/dialog/dialog-modal";
import { Input } from "@/components/ui/input";
import { Cross2Icon } from "@radix-ui/react-icons";
import { PlusIcon } from "lucide-react";
import { forwardRef } from "react";
import AppointmentForm from "./appointment-form";
import { Button } from "@/components/ui/button";
import { ExtendDataTableProps } from "@/components/common/data-table/types";

export interface AppointmentsDataTableToolbarProps<TData>
  extends ExtendDataTableProps<TData> {
  //   table: Table<TData>;
}

export type AppointmentsDataTableToolbarMethods = {};

export const AppointmentsDataTableToolbar = forwardRef<
  AppointmentsDataTableToolbarMethods,
  AppointmentsDataTableToolbarProps<any>
>(function AppointmentsDataTableToolbar<TData>(
  { table }: AppointmentsDataTableToolbarProps<TData> //   ref
) {
  const isFiltered = table.getState().columnFilters.length > 0;
  return (
    <section className="w-full bg-_gray-200 p-3 flex justify-start items-center">
      {/* Toolbar */}
      <aside className="flex space-x-6 items-center w-full ">
        <Input
          type="text"
          placeholder="Search patients"
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          className="w-1/3 rounded-xl bg-white"
          onChange={(event) => {
            table.getColumn("name")?.setFilterValue(event.target.value);
          }}
        />
        {isFiltered && (
          <Button
            variant={`ghost`}
            onClick={() => {
              table.resetColumnFilters();
            }}
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
        <DialogModal
          hasTrigger
          className="rounded-xl border-2 border-_p-ocean-green px-12 pt-5 pb-12 overflow-y-auto w-[547px]"
          DialogTrigger={
            <button className="rounded-full items-center p-2 border border-_p-ocean-green bg-_s-honeydew">
              <PlusIcon size={20} />
            </button>
          }
          DialogTitle={
            <p className="text-lg font-bold text-center">Add new Appointment</p>
          }
          DialogContent={<AppointmentForm />}
          DialogCloser={
            <button
              className="text-neutral-800 bg-_gray-300 absolute top-[10px] right-[10px] inline-flex size-10 appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          }
        />
      </aside>
    </section>
  );
});
