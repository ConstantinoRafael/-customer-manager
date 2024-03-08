import { IGetCustomersRepository } from "../../controllers/get-customers/protocols";
import { Customer } from "../../models/customer";

export class GetCustomersRepository implements IGetCustomersRepository {
  async getCustomers(): Promise<Customer[]> {
    return [
      {
        name: "Rafael",
        email: "rafael@rafael.com",
        phone: "111111111",
      },
    ];
  }
}
