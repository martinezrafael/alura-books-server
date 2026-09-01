const fs = require("fs");

function getTodosLivros() {
  return JSON.parse(fs.readFileSync("livros.json"));
}

function getLivroPorId(id) {
  const livros = JSON.parse(fs.readFileSync("livros.json"));
  const livro = livros.find((livro) => livro.id === parseInt(id));
  if (!livro) {
    throw new Error("Livro não encontrado");
  }
  return livro;
}

function insereLivro(novoLivro) {
  const livros = JSON.parse(fs.readFileSync("livros.json"));
  fs.writeFileSync("livros.json", JSON.stringify([...livros, novoLivro]));
}

module.exports = {
  getTodosLivros,
  getLivroPorId,
  insereLivro,
};
