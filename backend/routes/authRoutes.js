import express from "express";
import { registerUser, logout } from "../controllers/user.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/logout", logout);

export default router;
