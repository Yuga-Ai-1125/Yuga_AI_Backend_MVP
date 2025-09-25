import express from "express";
import { solveDoubt } from "../controllers/doubt-controller.js";

const router = express.Router();

router.post("/solve", solveDoubt);

export default router;