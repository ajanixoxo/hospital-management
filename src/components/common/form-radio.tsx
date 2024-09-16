import {
  FormField,
  FormControl,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { FormRadioGroupProps } from "@/types";
import { FieldValues, useForm, useFormContext } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

export default function FormRadioGroup<T extends FieldValues>(
  props: FormRadioGroupProps<T>
) {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={props.name}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel className="text-neutral-700">{props.label}</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className={props.className}
                orientation={props.orientation}
              >
                {props.radios?.map((radio) => (
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem
                        value={radio.value}
                        className="data-[state=checked]:bg-_p-ocean-green data-[state=checked]:text-white data-[state=checked]:border-_p-ocean-green data-[state=unchecked]:border-_p-ocean-green"
                      />
                    </FormControl>
                    <FormLabel className="font-normal">{radio.label}</FormLabel>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormControl>
          </FormItem>
        );
      }}
    />
  );
}
