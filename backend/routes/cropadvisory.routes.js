import express from 'express'
const router = express.Router();
import { getCropAdvisory, getHindiSummary } from '../controller/cropadvisory.controller.js';

router.post("/advisory", getCropAdvisory);
router.post("/summary", getHindiSummary);

export default router;