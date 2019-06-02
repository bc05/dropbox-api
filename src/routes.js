import { Router } from "express";

import BoxController from "./controllers/BoxController";
import FileController from "./controllers/FileController";

import multer from "multer";
import multerConfig from "./config/multer";

const router = Router();

router.get("/", (req, res) => res.send("It's works"));

//routes for box
router.get("/boxes", BoxController.index);
router.get("/boxes/:id", BoxController.show);
router.post("/boxes", BoxController.store);
router.delete("/boxes/:id/deletar", BoxController.delete);
router.post("/boxes/:id/files", multer(multerConfig).single("file"), FileController.store);

export default router;