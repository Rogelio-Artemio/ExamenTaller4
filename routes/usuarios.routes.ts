import express from "express";
import * as userController from "../controllers/usuarios.controller.ts";

const router = express.Router();

router.get("/all/:id", userController.getUserById);
router.get("/registro", userController.registeUser);

export default router;

