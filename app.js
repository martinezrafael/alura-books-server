import "dotenv/config";
import express from "express";
import livrosRouter from "./routes/livrosRoutes.js";

const port = process.env.PORT;

const app = express();

app.use(express.json());

app.use("/livros", livrosRouter);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
