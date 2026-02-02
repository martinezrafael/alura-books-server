import fs from "fs";
import {
  getAllBooks,
  createBook,
  getBook,
  editBook,
} from "../services/livrosService.js";

const getLivros = (req, res) => {
  try {
    const livros = getAllBooks();
    res.status(200).json(JSON.parse(livros));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createLivro = (req, res) => {
  try {
    const livroCriado = createBook(req.body);
    res.status(201).json(livroCriado);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getLivro = (req, res) => {
  try {
    const id = req.params.id;
    const livro = getBook(id);
    res.status(200).json(livro);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const patchLivro = (req, res) => {
  try {
    const body = req.body;
    const id = req.params.id;
    editBook(body, id);
    res
      .status(200)
      .json({ message: `Livro id:${id}, modificado com sucesso!` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getLivros, createLivro, getLivro, patchLivro };
