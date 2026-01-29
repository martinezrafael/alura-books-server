import fs from "fs";
import { getAllBooks, createBook } from "../services/livrosService.js";

const getLivros = (req, res) => {
  try {
    const livros = getAllBooks();
    res.status(200).json(JSON.parse(livros));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createLivro = (req, res) => {
  const livroCriado = createBook(req.body);
  try {
    res.status(200).json(livroCriado);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getLivros, createLivro };
