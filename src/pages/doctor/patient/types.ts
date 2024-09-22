import { Patient } from "./components/patient-card";

export interface PatientResponse {
  data: Patient[];
  pagination: PaginationResponse;
}

export interface PaginationResponse {
  currPage: number;
  nextPage: number;
  prevPage: number;
  pageSize: number;
  totalPages: number;
  count: number;
}
