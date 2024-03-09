import { Customer } from "../../models/customer";
import { HttpRequest, HttpResponse } from "../protocols";
import {
  CreateCustomerParams,
  ICreateCustomerController,
  ICreateCustomerRepository,
} from "./protocols";

export class CreateCustomerController implements ICreateCustomerController {
  constructor(
    private readonly createCustomerRepository: ICreateCustomerRepository
  ) {}
  async handle(
    httpRequest: HttpRequest<CreateCustomerParams>
  ): Promise<HttpResponse<Customer>> {
    try {
      if (!httpRequest.body) {
        return {
          statusCode: 400,
          body: "Please specify a body",
        };
      }

      const customer = await this.createCustomerRepository.createCustomer(
        httpRequest.body
      );

      return {
        statusCode: 201,
        body: customer,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong",
      };
    }
  }
}
