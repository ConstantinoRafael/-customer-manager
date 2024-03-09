import { Customer } from "../../models/customer";

export interface CreateCustomerParams {
  name: string;
  email: string;
  phone: string;
}

export interface ICreateCustomerRepository {
  createCustomer(params: CreateCustomerParams): Promise<Customer>;
}
