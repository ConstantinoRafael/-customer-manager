import { IGetCustomersRepository } from "../../controllers/get-customers/protocols";
import { connection } from "../../database/database";
import { Customer } from "../../models/customer";

export class PgGetCustomersRepository implements IGetCustomersRepository {
  async getCustomers(): Promise<Customer[]> {
    const customers = await connection.query("SELECT * FROM customers");
    return customers.rows;
  }
}
