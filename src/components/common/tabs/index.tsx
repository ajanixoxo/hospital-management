import type { TabVariant } from "@/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { generateId } from "@/utils/helpers";
import { cn } from "@/lib/utils";

interface ElementType {
  id: string | number;
  name: string;
  element: JSX.Element;
}
interface TabRouterProps {
  tabClassName?: string;
  config: ElementType[];
  variant: TabVariant["variant"];
}

export function TabRouter({ config, tabClassName, variant }: TabRouterProps) {
  const configured = config.some(
    (item) => item.id || item.name || item.element
  );
  if (!configured)
    throw new Error("TabRouter: config is not properly configured");
  return (
    <>
      <Tabs defaultValue={config[0].id as any} className={tabClassName}>
        <TabsList variant={variant} className={cn()}>
          {config?.map((key, _) => (
            <TabsTrigger
              variant={variant}
              key={generateId()}
              value={key?.id as string}
              className={cn()}
            >
              {key?.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {config?.map((element, index) => (
          <TabsContent
            variant={variant}
            key={generateId()}
            value={config[index].id as string}
            className="h-full w-full bg-rose-200"
          >
            {element.element}
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
}
