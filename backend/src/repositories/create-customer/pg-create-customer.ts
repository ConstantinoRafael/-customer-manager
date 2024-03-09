import {
  CreateCustomerParams,
  ICreateCustomerRepository,
} from "../../controllers/create-customer/protocols";
import { connection } from "../../database/database";
import { Customer } from "../../models/customer";

export class PgCreateCustomerRepository implements ICreateCustomerRepository {
  async createCustomer(params: CreateCustomerParams): Promise<Customer> {
    const { name, email, phone } = params;
    await connection.query(
      `INSERT INTO customers (name, email, phone) VALUES ($1, $2, $3)`,
      [name, email.toLowerCase(), phone]
    );

    const customer = await connection.query(
      `SELECT * FROM customers WHERE email=$1`,
      [email.toLowerCase()]
    );

    if (!customer) {
      throw new Error("Customer not created!");
    }

    return customer.rows[0];
  }
}
