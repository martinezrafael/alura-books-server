import fs from "fs";

const getAllBooks = () => {
  return fs.readFileSync("./data/livros.json");
};

const createBook = (novoLivro) => {
  const database = JSON.parse(fs.readFileSync("./data/livros.json"));
  fs.writeFileSync(
    "./data/livros.json",
    JSON.stringify([...database, novoLivro]),
  );
};

export { getAllBooks, createBook };
