import { Router } from "express";
import { getUserById, registeUser } from "../controllers/usuarios.controller.ts";

const router = Router();

router.get("/all/:id", getUserById);

router.get("/registro", registeUser);

export default router