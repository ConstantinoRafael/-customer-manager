import { Customer } from "../../models/customer";
import { HttpResponse } from "../protocols";

export interface IGetCustomersController {
  hangle(): Promise<HttpResponse<Customer[]>>;
}

export interface IGetCustomersRepository {
  getCustomers(): Promise<Customer[]>;
}
