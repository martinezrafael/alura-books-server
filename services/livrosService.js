import fs from "fs";

const getAllBooks = () => {
  return fs.readFileSync("./data/livros.json");
};

const getBook = (id) => {
  const livros = JSON.parse(fs.readFileSync("./data/livros.json"));
  const livroFiltrado = livros.filter((livro) => livro.id === id)[0];
  return livroFiltrado;
};

const createBook = (novoLivro) => {
  const database = JSON.parse(fs.readFileSync("./data/livros.json"));
  fs.writeFileSync(
    "./data/livros.json",
    JSON.stringify([...database, novoLivro]),
  );
};

const editBook = (content, id) => {
  let livros = JSON.parse(fs.readFileSync("./data/livros.json"));
  const indiceModificado = livros.findIndex((livro) => livro.id === id);

  const conteudoAlterado = { ...livros[indiceModificado], ...content };

  livros[indiceModificado] = conteudoAlterado;

  fs.writeFileSync("./data/livros.json", JSON.stringify(livros));
};

export { getAllBooks, createBook, getBook, editBook };
