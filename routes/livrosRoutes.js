import { Router } from "express";
import getLivros from "../controllers/livrosController.js";

const router = Router();

router.get("/", getLivros);

router.post("/", (req, res) => {
  const livroCriado = req.body;
  res.status(200).json(livroCriado);
});

export default router;
