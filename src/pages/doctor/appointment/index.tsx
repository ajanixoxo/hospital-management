import { DataTable } from "@/components/common/data-table/data-table";
import { AppointmentDataType, ColumnsAppointment } from "./components/columns";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMemo, useState, useEffect } from "react";
import { AppointmentsDataTableToolbar } from "./components/appointments-toolbar";
export default function Appointment() {
  const columns = useMemo(() => ColumnsAppointment(), []);
  const [allAppointments, setAllAppointments] = useState<AppointmentDataType[]>(
    []
  );

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `${import.meta.env.VITE_PROXY_URL}/appointments`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          },
        }
      );
      const data = await res.json();
      setAllAppointments(data?.data);
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
      <DataTable
        Toolbar={AppointmentsDataTableToolbar}
        columns={columns}
        data={allAppointments}
        count={0}
        limit={4}
      />
    </main>
  );
}
