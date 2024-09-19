import { DataTable } from "@/components/common/data-table/data-table";
import { Input } from "@/components/ui/input";
import { PlusIcon } from "lucide-react";
import { AppointmentDataType, ColumnsAppointment } from "./components/columns";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AppointmentForm from "./components/appointment-form";
import { DialogModal } from "@/components/common/dialog/dialog-modal";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useMemo, useState, useEffect } from "react";
export default function Appointment() {
  const columns = useMemo(() => ColumnsAppointment(), []);
  const [allAppointments, setAllAppointments] = useState<AppointmentDataType[]>(
    []
  );

  useEffect(() => {
    (async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/appointments`, {
        method: "GET",
      });
      const data = await res.json();
      const slice = data.slice(0, 10);
      setAllAppointments(slice);
    })();
  }, []);

  return (
    <main className="rounded-lg flex flex-col w-full bg-white min-h-full px-4">
      <header className="w-full flex justify-end p-3">
        <span className="flex space-x-6 items-center">
          <p>Show</p>
          <Select>
            <SelectTrigger className="w-[180px]  bg-_s-honeydew border-_p-ocean-green">
              <SelectValue placeholder="Today" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {/* <SelectLabel>Fruits</SelectLabel> */}
                <SelectItem value="Last month">Last month</SelectItem>
                <SelectItem value="Last year">Last year</SelectItem>
                <SelectItem value="Last week">Last week</SelectItem>
                <SelectItem value="Yesterday">Yesterday</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <p>Appointments</p>
        </span>
      </header>
      <section className="w-full bg-_gray-200 p-3 flex justify-start items-center">
        <aside className="flex space-x-6 items-center w-full ">
          <Input
            type="text"
            placeholder="Search patients"
            className="w-1/3 rounded-xl bg-white"
          />
          <DialogModal
            hasTrigger
            className="w-[527px] rounded-xl border-2 border-_p-ocean-green px-12 pt-5 pb-12 overflow-y-auto"
            DialogTrigger={
              <button className="rounded-full items-center p-2 border border-_p-ocean-green bg-_s-honeydew">
                <PlusIcon size={20} />
              </button>
            }
            DialogTitle={
              <p className="text-lg font-bold text-center">
                Add new Appointment
              </p>
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
      <DataTable columns={columns} data={allAppointments} count={0} limit={4} />
    </main>
  );
}
