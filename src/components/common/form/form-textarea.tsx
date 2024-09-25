import { FieldValues, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  //   FormMessage,
} from "@/components/ui/form";

import { Textarea } from "@/components/ui/textarea";
import { FormTextareaProps } from "@/components/common/form/types";

export default function FormTextarea<T extends FieldValues>(
  props: FormTextareaProps<T>
) {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      disabled={props.disabled}
      name={props.name}
      render={({ field }) => (
        <FormItem className={props.formItemClassname}>
          <FormLabel className="">{props.label}</FormLabel>
          <FormControl>
            <Textarea
              className={cn(props.className || "")}
              {...props}
              {...field}
              readOnly={props.readonly}
            />
          </FormControl>
          {/* <FormMessage /> */}
        </FormItem>
      )}
    />
  );
}
