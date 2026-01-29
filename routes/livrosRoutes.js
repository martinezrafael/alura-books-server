import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "Deu tudo certo!" });
  } catch (error) {
    res.status(500).json({ message: `Erroou! ${error.message}` });
  }
});

router.post("/", (req, res) => {
  const livroCriado = req.body;
  res.status(200).json(livroCriado);
});

export default router;
