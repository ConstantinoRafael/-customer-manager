import express from "express";
import { GetCustomersRepository } from "./repositories/get-customers/get-customers";
import { GetCustomersController } from "./controllers/get-customers/get-customers";

const app = express();

const port = process.env.PORT || 5000;

app.get("/customers", async (req, res) => {
  const getCustomersRepository = new GetCustomersRepository();

  const getCustomersController = new GetCustomersController(
    getCustomersRepository
  );

  const { body, statusCode } = await getCustomersController.handle();

  res.send(body).status(statusCode);
});

app.listen(port, () => console.log(`listening on port ${port}`));
