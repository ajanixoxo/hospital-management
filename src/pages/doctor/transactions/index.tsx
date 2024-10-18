import { DataTable } from "@/components/common/data-table/data-table";
import { AppDeleteIcon } from "@/components/common/icons";
import {
  ForwardRefExoticComponent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  ColumnsTransactions,
  TransactionDataType,
} from "./components/table-columns";
import {
  SideDrawer,
  SideDrawerMethods,
} from "@/components/common/dialog/side-drawer";
import ViewTransactionDetails from "./components/view-transaction-details";

export default function Transactions() {
  const sheetRef = useRef<SideDrawerMethods | null>(null);
  const columns = useMemo(() => ColumnsTransactions(), []);
  const [transactions, setTransactions] = useState<TransactionDataType[]>();

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `${import.meta.env.VITE_PROXY_URL}/transactions`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          },
        }
      );
      const data = await res.json();
      setTransactions(data?.data);
    })();
  }, []);
  return (
    <>
      <SideDrawer
        ref={sheetRef}
        noHeader
        side={`right`}
        SheetContent={<ViewTransactionDetails />}
        className="md:max-w-xl"
      />
      <main className="rounded-lg flex flex-col w-full bg-white h-full p-4 space-y-6">
        <header className="flex flex-col space-y-6">
          <p className="font-bold text-2xl">Transactions</p>
          <div className="grid grid-cols-4 gap-x-6">
            {[1, 2, 3, 4].map((item) => (
              <HeroCard
                key={item}
                icon={AppDeleteIcon}
                duration="from last year"
                subTitle="Total Transaction"
                percentage="10.80%"
                value="₦ 1,000,000"
              />
            ))}
          </div>
        </header>
        <section className="border rounded-lg w-full flex-1 p-2">
          <DataTable
            columns={columns}
            data={transactions ?? []}
            count={0}
            limit={10}
            onRowClick={() =>
              sheetRef.current?.onOpen && sheetRef.current?.onOpen()
            }
          />
        </section>
      </main>
    </>
  );
}

type HeroCardProps = {
  icon?: ForwardRefExoticComponent<any>;
  duration?: string;
  subTitle?: string;
  percentage?: string;
  value?: string;
};
export const HeroCard = (props: HeroCardProps) => {
  return (
    <article className="flex flex-col p-3 space-y-4 rounded-lg border">
      <div className="flex items-center space-x-5">
        <span className="p-3 rounded-full bg-white border">
          {props.icon && <props.icon />}
        </span>
        <span className="flex flex-col space-y-2">
          <p className="text-sm font-bold text-green-700">{props.percentage}</p>
          <p className="text-sm text-gray-500">{props.duration}</p>
        </span>
      </div>
      <span className="flex flex-col gap-y-2">
        <p className="text-xl font-bold">{props.value}</p>
        <p className="text-sm text-gray-500">{props.subTitle}</p>
      </span>
    </article>
  );
};
