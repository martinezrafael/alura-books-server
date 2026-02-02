import { Router } from "express";
import {
  getLivros,
  createLivro,
  getLivro,
  patchLivro,
  deleteLivro,
} from "../controllers/livrosController.js";

const router = Router();

router.get("/", getLivros);

router.post("/", createLivro);

router.get("/:id", getLivro);

router.patch("/:id", patchLivro);

router.delete("/:id", deleteLivro);

export default router;
