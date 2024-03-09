import express from "express";
import { config } from "dotenv";
import { PgGetCustomersRepository } from "./repositories/get-customers/pg-get-customers";
import { GetCustomersController } from "./controllers/get-customers/get-customers";
import { PgCreateCustomerRepository } from "./repositories/create-customer/pg-create-customer";
import { CreateCustomerController } from "./controllers/create-customer/create-customer";

const main = async () => {
  config();

  const app = express();

  const port = process.env.PORT || 5000;

  app.get("/customers", async (req, res) => {
    const pgGetCustomersRepository = new PgGetCustomersRepository();

    const getCustomersController = new GetCustomersController(
      pgGetCustomersRepository
    );

    const { body, statusCode } = await getCustomersController.handle();

    res.send(body).status(statusCode);
  });

  app.post("/customers", async (req, res) => {
    const pgCreateCustomerRepository = new PgCreateCustomerRepository();

    const createCustomerController = new CreateCustomerController(
      pgCreateCustomerRepository
    );

    const { body, statusCode } = await createCustomerController.handle({
      body: req.body,
    });

    res.send(body).status(statusCode);
  });

  app.listen(port, () => console.log(`listening on port ${port}`));
};

main();
