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

module.exports = {
  getTodosLivros,
  getLivroPorId,
};
