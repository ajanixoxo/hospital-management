import { cva, VariantProps } from "class-variance-authority";

export const tablistVariant = cva("", {
  variants: {
    variant: {
      default: `inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground`,
      line: `inline-flex items-center space-x-5 justify-start gap-0 border-b-2 border-border p-0 text-muted-foreground`,
      block: `inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground`,
    },

    defaultVariants: {
      variant: "default",
    },
  },
});

export const tabTriggerVariant = cva(
  "cursor-pointer items-center whitespace-nowrap inline-flex",
  {
    variants: {
      variant: {
        default: `inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow`,
        line: `text-sm -mb-[2px] justify-start border-b-2 py-2 font-medium transition-all first-of-type:ml-0 disabled:pointer-events-none disabled:text-muted-foreground data-[state=active]:border-sky-700 data-[state=inactive]:border-transparent data-[state=active]:font-semibold data-[state=active]:text-foreground`,
        block: `justify-center rounded-md px-8 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  data-[state=inactive]:text-stone-700 data-[state=active]:bg-stone-300 data-[state=active]:text-stone-700 data-[state=active]:shadow`,
      },
      defaultVariants: {
        variant: "default",
      },
    },
  }
);

export const tabContentVariant = cva("", {
  variants: {
    variant: {
      default: `mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`,
      block: `mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`,
      line: `mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`,
    },
    defaultVariants: {
      variant: "default",
    },
  },
});

export type TypeTablistVariant = VariantProps<typeof tablistVariant>;
export type TypeTabTriggerVariant = VariantProps<typeof tabTriggerVariant>;
export type TypeTabContentVariant = VariantProps<typeof tabContentVariant>;
