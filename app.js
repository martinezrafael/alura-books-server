import "dotenv/config";
import express from "express";

const port = process.env.PORT;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ messsage: "Hello World!" });
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
