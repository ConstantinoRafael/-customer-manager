import { Customer } from "../../models/customer";
import { HttpRequest, HttpResponse } from "../protocols";

export interface ICreateCustomerController {
  handle(
    httpRequest: HttpRequest<CreateCustomerParams>
  ): Promise<HttpResponse<Customer>>;
}

export interface CreateCustomerParams {
  name: string;
  email: string;
  phone: string;
}

export interface ICreateCustomerRepository {
  createCustomer(params: CreateCustomerParams): Promise<Customer>;
}
