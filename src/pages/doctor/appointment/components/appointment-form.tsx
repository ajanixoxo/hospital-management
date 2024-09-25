import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "@/components/common/form/form-input";
import FormRadioGroup from "@/components/common/form/form-radio";
import { Button } from "@/components/ui/button";

const schema = z.object({
  fullName: z
    .string({
      required_error: "Fullname is required",
      invalid_type_error: "Invalid input",
    })
    .min(6, { message: "Fullname is too short" }),
  email: z.string({ required_error: "Email is required" }).email(),
  phone: z
    .string({
      required_error: "Phone number is required",
      invalid_type_error: "Invalid input",
    })
    .min(9, { message: "Phone is too short" }),
  age: z.coerce
    .number({ required_error: "Age is required" })
    .refine((age) => age > 0),
  gender: z.string(),
  date: z.string().date("Date is required"),
  time: z.string().time({ message: "Time is required" }),
  type: z.string(),
});
type schemaType = z.infer<typeof schema>;
export default function AppointmentForm() {
  const form = useForm<schemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      age: 10,
      gender: "",
      date: "",
      time: "",
      type: "",
    },
  });
  return (
    <Form {...form}>
      <form className="w-full h-full flex flex-col space-y-8">
        <div className="flex flex-col space-y-6">
          <FormInput
            className="rounded-xl"
            name={""}
            label={`Name`}
            type={""}
          />
          <FormInput
            className="rounded-xl"
            name={""}
            label={`Email`}
            type={""}
          />
          <FormInput
            className="rounded-xl"
            name={""}
            label={`Phone`}
            type={""}
          />
        </div>
        <div className="flex space-x-6 items-center">
          <FormInput
            className="rounded-xl w-1/2"
            name="age"
            label={`Age`}
            type={""}
          />
          <FormRadioGroup
            name={""}
            label={"Gender"}
            className="flex"
            radios={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
              { label: "Other", value: "other" },
            ]}
          />
        </div>
        <div className="flex justify-between items-center">
          <FormInput
            className="rounded-xl"
            label="Date"
            name="date"
            type={"date"}
          />
          <FormInput
            className="rounded-xl"
            label="Time"
            name="time"
            type={"time"}
          />
        </div>
        <FormRadioGroup
          name={""}
          label={"Book an appointment for"}
          className="flex"
          radios={[
            { label: "Checkup", value: "checkup" },
            { label: "Surgery", value: "surgery" },
          ]}
        />
        <Button
          className="rounded-xl w-full h-10 bg-_p-ocean-green text-white"
          size={`default`}
        >
          Add
        </Button>
      </form>
    </Form>
  );
}
