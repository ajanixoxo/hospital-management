import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";
import type { TabVariant } from "@/types";
import {
  tabContentVariant,
  tablistVariant,
  tabTriggerVariant,
  type TypeTabContentVariant,
  type TypeTabTriggerVariant,
  type TypeTablistVariant,
} from "../common/tabs/styles";

type ExtendedElementRefTablist = TabVariant &
  React.ElementRef<typeof TabsPrimitive.List> &
  TypeTablistVariant;
type ExtendedComponentPropsTabList = TabVariant &
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> &
  TypeTablistVariant;
type ExtendedElementRefTabTrigger = TabVariant &
  React.ElementRef<typeof TabsPrimitive.Trigger> &
  TypeTabTriggerVariant;
type ExtendedComponentPropsTabTrigger = TabVariant &
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> &
  TypeTabTriggerVariant;
type ExtendedElementRefTabContent = TabVariant &
  React.ElementRef<typeof TabsPrimitive.Content> &
  TypeTabContentVariant;
type ExtendedComponentPropsTabContent = TabVariant &
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> &
  TypeTabContentVariant;
const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  ExtendedElementRefTablist,
  ExtendedComponentPropsTabList
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      tablistVariant({ variant }),
      // "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  ExtendedElementRefTabTrigger,
  ExtendedComponentPropsTabTrigger
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      tabTriggerVariant({ variant }),
      // "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  ExtendedElementRefTabContent,
  ExtendedComponentPropsTabContent
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    // className={cn(
    //   "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    //   className
    // )}
    {...props}
    className={cn(tabContentVariant({ variant }))}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
