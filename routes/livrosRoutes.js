import { Router } from "express";
import {
  getLivros,
  createLivro,
  getLivro,
} from "../controllers/livrosController.js";

const router = Router();

router.get("/", getLivros);

router.post("/", createLivro);

router.get("/:id", getLivro);

export default router;
