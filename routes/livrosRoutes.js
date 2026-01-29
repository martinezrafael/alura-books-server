import { Router } from "express";
import { getLivros, createLivro } from "../controllers/livrosController.js";

const router = Router();

router.get("/", getLivros);

router.post("/", createLivro);

export default router;
