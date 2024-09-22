import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import ViewPatientDetails from "./view-patient-details";
import { SideDrawer } from "@/components/common/dialog/side-drawer";

export type Address = {
  houseNumber: number;
  street: string;
  state: string;
  zipCode: number;
  country: string;
};

export type Patient = {
  id: string;
  fullName: string;
  avatar: string;
  dateOfBirth: string; // ISO 8601 date string
  address: Address;
  weight: number;
  bloodPressure: number;
  bloodGlucose: number;
};

type PatientCardProps = {
  id: string;
  fullName: string;
  avatar: string;
  dateOfBirth: string; // ISO 8601 date string
  address: Address;
  weight: number;
  bloodPressure: number;
  bloodGlucose: number;
};

export const PatientCard = (props: PatientCardProps) => {
  function formatAddress(address: Address) {
    return `${address?.state} ${address?.street} ${address?.zipCode}`;
  }

  return (
    <article className="rounded-lg border p-3 self-start divide-y size-80">
      <header className="flex flex-col space-y-3 pb-3">
        <span className="p-3 rounded-full items-center justify-center border self-start">
          <Avatar>
            <AvatarImage src={`https://github.com/shadcn.png`} alt="avatar" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </span>
        <span className="flex flex-col space-y-2">
          <p className="font-bold text-base">{props.fullName}</p>
          <p className="text-neutral-700 text-sm font-normal truncate">
            {formatAddress(props.address)}
          </p>
        </span>
      </header>
      <footer className="flex pt-3 flex-col space-y-2">
        <ul className="flex flex-col space-y-2">
          <li className="flex items-center justify-between">
            <p className="text-neutral-600 text-sm">Weight</p>
            <p className="text-neutral-800 text-base font-medium">
              {props.weight}
            </p>
          </li>
          <li className="flex items-center justify-between">
            <p className="text-neutral-600 text-sm">Blood Pressure</p>
            <p className="text-neutral-800 text-base font-medium">
              {props.bloodPressure}
            </p>
          </li>
          <li className="flex items-center justify-between">
            <p className="text-neutral-600 text-sm">Blood Glucose</p>
            <p className="text-neutral-800 text-base font-medium">
              {props.bloodGlucose}
            </p>
          </li>
        </ul>
        <SideDrawer
          noHeader
          hasTrigger
          side={`right`}
          SheetContent={<ViewPatientDetails />}
          className="md:max-w-4xl"
          SheetTrigger={
            <Button className="w-full " variant={`secondary`}>
              View Details
            </Button>
          }
        />
      </footer>
    </article>
  );
};
