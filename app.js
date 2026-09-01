const express = require("express");
const rotasLivro = require("./rotas/livro");

const app = express();

app.use(express.json());

const PORT = 8000;

app.use("/livros", rotasLivro);

app.listen(PORT, () => {
  console.log(`Server on running on port: ${PORT}`);
});
