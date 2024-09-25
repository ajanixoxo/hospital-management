import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DownloadIcon, FilterIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { PatientCard, type Patient } from "./components/patient-card";
import useDebounce from "@/components/common/hooks/use-debounce";
import type { PaginationResponse, PatientResponse } from "./types";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Patient() {
  const [viewPatients, setViewPatients] = useState<Patient[]>();
  const [editedPatients, setEditedPatients] = useState<Patient[]>();
  const [searchValue, setSearchValue] = useState<string>("");
  const [pagination, setPagination] = useState<PaginationResponse>();

  const [pages, setPages] = useState<number[]>();
  const [limit, setLimit] = useState<string>("10");

  const debouncedSearchValue = useDebounce(searchValue, 500);
  const [searchParams] = useSearchParams();

  function filterPatients(
    patients: Patient[] | undefined,
    searchValue: string
  ) {
    // filter based on fullName for now
    const filter = patients?.filter((patient) => {
      return patient.fullName.toLowerCase().includes(searchValue.toLowerCase());
    });
    return filter;
  }

  // breakdown the totalCount from the pagination, so we display the pages on the pagination component, every page should fetch 10 records
  useEffect(() => {
    if (pagination?.totalPages) {
      const totalPages = pagination.totalPages / Number(limit);
      const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
      setPages(pages);
    }
  }, [pagination, limit]);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `${import.meta.env.VITE_PROXY_URL}/users?limit=${limit}&page=${
          searchParams?.get("page") || 1
        }`,
        {
          method: "GET",
          headers: {
            "x-api-key": import.meta.env.VITE_API_KEY satisfies string,
          },
        }
      );
      const data = (await res.json()) as PatientResponse;
      setViewPatients(data?.data);
      setPagination(data?.pagination);
    })();
  }, [searchParams?.get("page"), limit]);

  useEffect(() => {
    // if no search value, return all patients
    if (!debouncedSearchValue) {
      setEditedPatients(viewPatients);
      return;
    }
    // filter patients based on search value
    const filteredPatients = filterPatients(viewPatients, debouncedSearchValue);
    setEditedPatients(filteredPatients);
  }, [viewPatients, debouncedSearchValue]);

  return (
    <main className="rounded-lg flex flex-col w-full bg-white h-full p-4 space-y-6">
      <header className="w-full flex flex-col space-y-6">
        <p className="font-medium text-3xl">Patient List</p>
        <div className="flex justify-between items-center">
          <Input
            type="text"
            placeholder="Search patients"
            className="w-1/3 rounded-xl bg-white"
            onChange={(e) => {
              setSearchValue(e.currentTarget.value);
            }}
          />
          <aside className="flex items-center space-x-5">
            <Button
              className="flex space-x-2 items-center border"
              variant={`ghost`}
            >
              <DownloadIcon size={18} className="text-neutral-700" />
              <p className="text-xs font-semibold text-neutral-700">
                Download Report
              </p>
            </Button>
            <Button
              className="flex space-x-2 items-center border"
              variant={`ghost`}
            >
              <FilterIcon size={18} className="text-neutral-700" />
              <p className="text-xs font-semibold text-neutral-700">Filter</p>
            </Button>
          </aside>
        </div>
      </header>
      <ScrollArea scrollHideDelay={200} className="h-[73vh] w-full">
        <section className="flex flex-wrap gap-6">
          {editedPatients?.map((patient) => (
            <PatientCard
              key={patient.id}
              id={patient.id}
              fullName={patient.fullName}
              avatar={patient.avatar}
              dateOfBirth={patient.dateOfBirth}
              address={patient.address}
              weight={patient.weight}
              bloodPressure={patient.bloodPressure}
              bloodGlucose={patient.bloodGlucose}
            />
          ))}
        </section>
      </ScrollArea>
      <footer className="flex items-center justify-between">
        <aside>
          <Select onValueChange={setLimit}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Count" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Count</SelectLabel>
                {[10, 20, 30, 40]?.map((page) => (
                  <SelectItem value={page as unknown as string}>
                    {page}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </aside>
        <aside>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  className={cn(
                    !pagination?.prevPage &&
                      "pointer-events-none cursor-not-allowed"
                  )}
                  href={`?page=${pagination?.prevPage}`}
                />
              </PaginationItem>
              {pages?.map((page) => (
                <PaginationItem>
                  <PaginationLink
                    className={cn(
                      searchParams.get("page") === String(page) &&
                        buttonVariants({
                          variant: "default",
                          size: "sm",
                        })
                    )}
                    href={`?page=${page}`}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              {/* <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem> */}
              <PaginationItem>
                <PaginationNext
                  className={cn(!pagination?.nextPage && "pointer-events-none")}
                  href={`?page=${pagination?.nextPage}`}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </aside>
      </footer>
    </main>
  );
}
