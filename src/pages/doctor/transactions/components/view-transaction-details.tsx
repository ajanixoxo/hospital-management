import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DownloadIcon, FileIcon } from "lucide-react";

export default function ViewTransactionDetails() {
  return (
    <main className="flex h-full w-full flex-col">
      <header className="py-2 justify-center border-b">
        <h1 className="font-bold text-xl">Transaction detail</h1>
      </header>
      <header className="mt-6">
        <p className="text-xs font-bold uppercase">patient information</p>
        <article className="flex space-x-3 items-center mt-2">
          <span className="p-3 border rounded-full">
            <Avatar>
              <AvatarImage src={`https://github.com/shadcn.png`} alt="avatar" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </span>
          <ul className="flex flex-col space-y-3">
            <li className="font-bold text-sm">{`Mr. Watkins Rome`}</li>
            <li className="text-sm text-gray-500">
              Ranchview Richardson California 62639
            </li>
          </ul>
        </article>
      </header>
      <div className="mt-6">
        <p className="text-xs font-bold uppercase">patient detail</p>
        <ul className="flex flex-col space-y-4 mt-2 pr-40">
          <li className="flex justify-between">
            <span className="text-sm text-gray-500">From</span>
            <span className="text-sm text-gray-500 text-end">Pay with</span>
          </li>
          <li className="flex justify-between">
            <span className="text-sm font-bold">Otlas Central Bank</span>
            <span className="text-sm font-bold text-start">Debit Card</span>
          </li>
          <li className="flex justify-between">
            <span className="text-sm text-gray-500">Pay on</span>
            <span className="text-sm text-gray-500">Status Payment</span>
          </li>
          <li className="flex justify-between">
            <span className="text-sm font-bold">Dec 14, 2021 at 09:12am</span>
            <Badge variant={`default`} className="text-xs">
              Success
            </Badge>
          </li>
        </ul>
      </div>
      <div className="mt-6">
        <p className="text-xs font-bold uppercase">initial payment</p>
        <ul className="flex flex-col space-y-3 mt-2">
          <li className="py-4 border-b border-dashed flex flex-col space-y-3">
            <span className="flex justify-between">
              <p className="text-sm text-gray-500">{`Medical check-up`}</p>
              <p className="text-sm font-bold text-end">{`$600`}</p>
            </span>
            <span className="flex justify-between">
              <p className="text-sm text-gray-500">Medicine</p>
              <p className="text-sm font-bold text-start">{`$91`}</p>
            </span>
          </li>
          <li className="py-4 border-b border-dashed flex flex-col space-y-3">
            <span className="flex justify-between">
              <p className="text-sm text-gray-500">Subtotal</p>
              <p className="text-sm font-bold">{`$800`}</p>
            </span>
            <span className="flex justify-between">
              <p className="text-sm text-gray-500">Tax</p>
              <p className="text-sm font-bold">{`$91`}</p>
            </span>
          </li>
          <li className="flex justify-between">
            <span className="text-sm font-bold">Grandtotal</span>
            <span className="text-lg font-bold text-_p-ocean-green">{`$891`}</span>
          </li>
        </ul>
      </div>
      <div className="mt-6">
        <p className="text-xs font-bold uppercase">documentation</p>
        <article className="flex w-full p-3 border rounded-xl mt-4">
          <span className="flex space-x-3 items-center flex-1">
            <FileIcon size={24} />
            <span className="text-sm font-bold">Medical check-up</span>
          </span>
          <DownloadIcon size={24} />
        </article>
      </div>
    </main>
  );
}
