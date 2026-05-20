import express from "express";

import { getResult } from "../controllers/resultController.js";

const router = express.Router();

router.post("/search", getResult);

export default router;
