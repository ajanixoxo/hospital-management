import { Table } from "@tanstack/react-table";

export interface SearchParams {
  [key: string]: string | string[] | undefined;
}

export interface Option {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
  withCount?: boolean;
}
export interface DataTableFilterField<TData> {
  label: string;
  value: keyof TData;
  placeholder?: string;
  options?: Option[];
}
export interface DataTableFilterOption<TData> {
  id: string;
  label: string;
  value: keyof TData;
  options: Option[];
  filterValues?: string[];
  filterOperator?: string;
  isMulti?: boolean;
}
export interface Option {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
  withCount?: boolean;
}
export interface ExtendDataTableProps<TData> {
  table: Table<TData>;
  filterFields?: FilterField[];
}
export interface ExtendDataTableRefMethods {
  onClick?: (event: string) => void;
}
export interface FilterField {
  value: string;
  label: string;
}
