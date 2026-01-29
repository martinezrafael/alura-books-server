const getLivros = (req, res) => {
  try {
    res.status(200).json({ message: "Deu tudo certo" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default getLivros;
