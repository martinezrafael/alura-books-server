import fs from "fs";

const getAllBooks = () => {
  return fs.readFileSync("./data/livros.json");
};

const getBook = (id) => {
  const livros = JSON.parse(fs.readFileSync("./data/livros.json"));
  const livroFiltrado = livros.filter((livro) => livro.id === id);
  return livroFiltrado;
};

const createBook = (novoLivro) => {
  const database = JSON.parse(fs.readFileSync("./data/livros.json"));
  fs.writeFileSync(
    "./data/livros.json",
    JSON.stringify([...database, novoLivro]),
  );
};

export { getAllBooks, createBook, getBook };
