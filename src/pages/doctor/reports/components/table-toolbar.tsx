import { DialogModal } from "@/components/common/dialog/dialog-modal";
import { Input } from "@/components/ui/input";
import { Cross2Icon } from "@radix-ui/react-icons";
import { forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { ExtendDataTableProps } from "@/components/common/data-table/types";
import { IconButton } from "@/components/common/icon-badge";
import { FilterIcon } from "lucide-react";

export interface ToolbarProps<TData> extends ExtendDataTableProps<TData> {
  //   table: Table<TData>;
}

type ToolbarMethods = {};

export const BirthReportsToolbar = forwardRef<
  ToolbarMethods,
  ToolbarProps<any>
>(function BirthReportsToolbar<TData>(
  { table }: ToolbarProps<TData> //   ref
) {
  const isFiltered = table.getState().columnFilters.length > 0;
  return (
    <section className="w-full p-3 flex justify-start items-center">
      <aside className="flex-1 flex items-center ">
        <Input
          type="text"
          placeholder={`Search reports`}
          // value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          className="w-1/3 rounded-xl bg-white"
          onChange={(event) => {
            table.getColumn("name")?.setFilterValue(event.target.value);
          }}
        />
        {isFiltered && (
          <Button
            variant={`ghost`}
            size={`sm`}
            onClick={() => {
              table.resetColumnFilters();
            }}
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </aside>
      <DialogModal
        hasTrigger
        className="rounded-xl border-2 border-_p-ocean-green px-12 pt-5 pb-12 overflow-y-auto w-[547px]"
        DialogTrigger={<Button variant={`default`}>New Birth Report</Button>}
        DialogTitle={
          <p className="text-lg font-bold text-center">New Birth Report</p>
        }
        DialogContent={<div />}
        DialogCloser={
          <button
            className="text-neutral-800 bg-_gray-300 absolute top-[10px] right-[10px] inline-flex size-10 appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <Cross2Icon />
          </button>
        }
      />
    </section>
  );
});
export const DeathReportsToolbar = forwardRef<
  ToolbarMethods,
  ToolbarProps<any>
>(function DeathReportsToolbar<TData>(
  { table }: ToolbarProps<TData> //   ref
) {
  const isFiltered = table.getState().columnFilters.length > 0;
  return (
    <section className="w-full p-3 flex justify-start items-center">
      <aside className="flex-1 flex items-center ">
        <Input
          type="text"
          placeholder={`Search reports`}
          // value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          className="w-1/3 rounded-xl bg-white"
          onChange={(event) => {
            table.getColumn("name")?.setFilterValue(event.target.value);
          }}
        />
        {isFiltered && (
          <Button
            variant={`ghost`}
            size={`sm`}
            onClick={() => {
              table.resetColumnFilters();
            }}
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </aside>
      <DialogModal
        hasTrigger
        className="rounded-xl border-2 border-_p-ocean-green px-12 pt-5 pb-12 overflow-y-auto w-[547px]"
        DialogTrigger={<Button variant={`default`}>New Death Report</Button>}
        DialogTitle={
          <p className="text-lg font-bold text-center">New Death Report</p>
        }
        DialogContent={<div />}
        DialogCloser={
          <button
            className="text-neutral-800 bg-_gray-300 absolute top-[10px] right-[10px] inline-flex size-10 appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <Cross2Icon />
          </button>
        }
      />
    </section>
  );
});

export const InvestigationsReportsToolbar = forwardRef<
  ToolbarMethods,
  ToolbarProps<any>
>(function InvestigationsReportsToolbar<TData>(
  { table }: ToolbarProps<TData> //   ref
) {
  const isFiltered = table.getState().columnFilters.length > 0;
  return (
    <section className="w-full p-3 flex justify-start items-center">
      <aside className="flex-1 flex items-center ">
        <Input
          type="text"
          placeholder={`Search reports`}
          // value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          className="w-1/3 rounded-xl bg-white"
          onChange={(event) => {
            table.getColumn("name")?.setFilterValue(event.target.value);
          }}
        />
        {isFiltered && (
          <Button
            variant={`ghost`}
            size={`sm`}
            onClick={() => {
              table.resetColumnFilters();
            }}
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </aside>
      <div className="flex space-x-3 items-center">
        <IconButton icon={FilterIcon} variant={`default`} size={24} />
        <DialogModal
          hasTrigger
          className="rounded-xl border-2 border-_p-ocean-green px-12 pt-5 pb-12 overflow-y-auto w-[547px]"
          DialogTrigger={
            <Button variant={`default`}>New Investigation Report</Button>
          }
          DialogTitle={
            <p className="text-lg font-bold text-center">
              New Investigation Report
            </p>
          }
          DialogContent={<div />}
          DialogCloser={
            <button
              className="text-neutral-800 bg-_gray-300 absolute top-[10px] right-[10px] inline-flex size-10 appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          }
        />
      </div>
    </section>
  );
});
export const OperationReportsToolbar = forwardRef<
  ToolbarMethods,
  ToolbarProps<any>
>(function OperationReportsToolbar<TData>(
  { table }: ToolbarProps<TData> //   ref
) {
  const isFiltered = table.getState().columnFilters.length > 0;
  return (
    <section className="w-full p-3 flex justify-start items-center">
      <aside className="flex-1 flex items-center ">
        <Input
          type="text"
          placeholder={`Search reports`}
          // value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          className="w-1/3 rounded-xl bg-white"
          onChange={(event) => {
            table.getColumn("name")?.setFilterValue(event.target.value);
          }}
        />
        {isFiltered && (
          <Button
            variant={`ghost`}
            size={`sm`}
            onClick={() => {
              table.resetColumnFilters();
            }}
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </aside>
      <DialogModal
        hasTrigger
        className="rounded-xl border-2 border-_p-ocean-green px-12 pt-5 pb-12 overflow-y-auto w-[547px]"
        DialogTrigger={
          <Button variant={`default`}>New Operation Report</Button>
        }
        DialogTitle={
          <p className="text-lg font-bold text-center">New Operation Report</p>
        }
        DialogContent={<div />}
        DialogCloser={
          <button
            className="text-neutral-800 bg-_gray-300 absolute top-[10px] right-[10px] inline-flex size-10 appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <Cross2Icon />
          </button>
        }
      />
    </section>
  );
});
