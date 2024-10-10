import { Router } from "express";
import { getUsers } from "../contollers/userController";


const router = Router();

router.get("/", getUsers);

export default router;