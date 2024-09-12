import { DataTable } from "@/components/common/data-table/data-table";
import { Input } from "@/components/ui/input";
import { PlusIcon } from "lucide-react";
import { AppointmentDataType, ColumnsAppointment } from "./components/columns";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function Appointment() {
  const columns = React.useMemo(() => ColumnsAppointment(), []);
  const [allAppointments, setAllAppointments] = React.useState<
    AppointmentDataType[]
  >([]);

  React.useEffect(() => {
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
          <button className="rounded-full items-center p-2 border border-_p-ocean-green bg-_s-honeydew">
            <PlusIcon size={20} />
          </button>
        </aside>
      </section>
      <DataTable columns={columns} data={allAppointments} count={0} limit={4} />
    </main>
  );
}
