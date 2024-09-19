import { cn } from "@/lib/utils";

type FieldsetProps = {
  label?: string;
  value?: string;
  className?: string;
  valueClassName?: string;
  labelClassName?: string;
};
export const Fieldset = (props: FieldsetProps) => {
  return (
    <fieldset className={cn("border px-6 py-2 rounded-xl", props.className)}>
      <legend className={cn("text-xs", props.labelClassName)}>
        {props.label}
      </legend>
      <p className={props.valueClassName}>{props.value}</p>
    </fieldset>
  );
};
