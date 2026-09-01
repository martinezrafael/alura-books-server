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

function modificaLivro(modificacoes, id) {
  let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"));
  const indiceModificado = livrosAtuais.findIndex(
    (livro) => livro.id === parseInt(id),
  );
  const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes };
  livrosAtuais[indiceModificado] = conteudoMudado;
  fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais));
}

function deletarLivroPorId(id) {
  const livros = JSON.parse(fs.readFileSync("livros.json"));
  const livroIndex = livros.findIndex((livro) => livro.id === parseInt(id));
  if (livroIndex === -1) {
    throw new Error("Livro não encontrado");
  }
  livros.splice(livroIndex, 1);
  fs.writeFileSync("livros.json", JSON.stringify(livros));
}

module.exports = {
  getTodosLivros,
  getLivroPorId,
  insereLivro,
  modificaLivro,
  deletarLivroPorId,
};
