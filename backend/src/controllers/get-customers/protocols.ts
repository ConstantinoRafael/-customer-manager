import { Customer } from "../../models/customer";
import { HttpResponse } from "../protocols";

export interface IGetCustomersController {
  handle(): Promise<HttpResponse<Customer[]>>;
}

export interface IGetCustomersRepository {
  getCustomers(): Promise<Customer[]>;
}
