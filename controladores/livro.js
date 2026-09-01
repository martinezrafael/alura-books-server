const {
  getTodosLivros,
  getLivroPorId,
  insereLivro,
  modificaLivro,
  deletarLivroPorId,
} = require("../servicos/livro");

function getLivros(req, res) {
  try {
    const livros = getTodosLivros();
    res.send(livros);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function getLivro(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      const livro = getLivroPorId(id);
      res.send(livro);
    }
    {
      res.status(422);
      res.send("O id do livro precisa ser um número.");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function postLivro(req, res) {
  try {
    const novoLivro = req.body;
    insereLivro(novoLivro);
    res.status(201);
    res.send("Livro inserido com sucesso!");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function patchLivro(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      const modificacoes = req.body;
      modificaLivro(modificacoes, id);
      res.send("Livro modificado com sucesso!");
    }
    {
      res.status(422);
      res.send("O id do livro precisa ser um número.");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function deleteLivro(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      deletarLivroPorId(id);
      res.send("Livro deletado com sucesso!");
    }
    {
      res.status(422);
      res.send("O id do livro precisa ser um número.");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  getLivros,
  getLivro,
  postLivro,
  patchLivro,
  deleteLivro,
};
