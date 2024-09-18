import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "@/components/common/form-input";
import FormRadioGroup from "@/components/common/form-radio";
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
export default function PatientForm() {
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
      <form className="w-full h-full flex flex-col space-y-8 mt-8">
        <div className="flex space-x-12 items-center w-full ">
          <FormInput
            className="rounded-xl"
            formItemClassname="w-full"
            name={""}
            label={`First Name`}
            type={""}
          />
          <FormInput
            className="rounded-xl"
            formItemClassname="w-full"
            name={""}
            label={`Last Name`}
            type={""}
          />
        </div>{" "}
        <div className="flex space-x-12 w-full items-center">
          <FormInput
            className="rounded-xl"
            name={""}
            label={`Email`}
            type={""}
            formItemClassname="w-full"
          />
          <FormInput
            className="rounded-xl"
            name={""}
            label={`Phone`}
            type={""}
            formItemClassname="w-full"
          />
        </div>
        <section className="flex w-full space-x-12 items-center">
          <aside className="flex  items-center space-x-12 w-1/2">
            <FormInput
              className="rounded-xl"
              formItemClassname="w-2/3"
              name="dob"
              label={`Date of Birth`}
              type={"date"}
            />
            <FormInput
              className="rounded-xl"
              formItemClassname="flex-1"
              name="age"
              label={`Age`}
              type={"number"}
            />
          </aside>
          <aside className="w-1/2">
            <FormRadioGroup
              name={""}
              label={"Gender"}
              className="flex w-1/2"
              radios={[
                { label: "Male", value: "male" },
                { label: "Female", value: "female" },
                { label: "Other", value: "other" },
              ]}
            />
          </aside>
        </section>
        <div className="w-full">
          <FormInput
            className="rounded-xl"
            label="Address"
            name="address"
            type={"text"}
          />
        </div>
        <div className="flex items-center w-full space-x-12">
          <FormInput
            className="rounded-xl"
            label="Treatment"
            name="treatment"
            type={"text"}
            formItemClassname="w-full"
          />
          <FormInput
            className="rounded-xl"
            label="Blood Group"
            name="bloodGroup"
            type={"text"}
            formItemClassname="w-full"
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
          className="rounded-xl w-full h-10 bg-_p-ocean-green text-white mt-8"
          size={`default`}
        >
          Add Patient
        </Button>
      </form>
    </Form>
  );
}
