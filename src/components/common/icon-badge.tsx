import { LucideIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const backgroundVariants = cva("flex items-center justify-center", {
  variants: {
    variant: {
      default: `p-1.5 rounded-md bg-primary text-primary-foreground shadow hover:bg-primary/90`,
      success: `bg-emerald-100`,
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
});

const iconVariants = cva("", {
  variants: {
    variant: {
      default: `fill-white p-1`,
      success: `text-emerald-700`,
    },
    defaultVariants: {
      variant: `default`,
      size: `default`,
    },
  },
});

type BackgroundVariantsProps = VariantProps<typeof backgroundVariants>;
type IconVariantProps = VariantProps<typeof iconVariants>;

interface IconButtonProps extends BackgroundVariantsProps, IconVariantProps {
  icon: LucideIcon;
  size?: number | string;
}
export const IconButton = ({ icon: Icon, variant, size }: IconButtonProps) => {
  return (
    <button className={cn(backgroundVariants({ variant }))}>
      <Icon
        className={cn(iconVariants({ variant }))}
        size={size}
        aria-label="Icon Button"
      />
    </button>
  );
};
