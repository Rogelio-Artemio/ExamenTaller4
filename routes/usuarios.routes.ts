import { Router } from "express";
import { getUserById, registeUser } from "../controllers/usuarios.controller.ts";

const router = Router();

router.get("/find/:id", getUserById);

router.get("/register", registeUser);

export default router