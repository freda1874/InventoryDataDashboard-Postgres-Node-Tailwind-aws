import { Router } from "express";
import { getDashboardMetrics } from "../contollers/dashboardController";

const router = Router();

router.get("/", getDashboardMetrics);

export default router;