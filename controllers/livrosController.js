import fs from "fs";

const getLivros = (req, res) => {
  const livros = fs.readFileSync("./data/livros.json");
  try {
    res.status(200).json(JSON.parse(livros));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createLivro = (req, res) => {
  try {
    const database = JSON.parse(fs.readFileSync("./data/livros.json"));
    const livroCriado = req.body;
    fs.writeFileSync(
      "./data/livros.json",
      JSON.stringify([...database, livroCriado]),
    );
    res.status(200).json(livroCriado);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getLivros, createLivro };
