import { Router } from "express";
import { getExpensesByCategory } from "../contollers/expenseController";

const router = Router();

router.get("/", getExpensesByCategory);

export default router;