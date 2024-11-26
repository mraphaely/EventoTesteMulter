import { Router } from "express";
import { inscricao, login, logout, create } from "../controllers/usuarioController.js";

//middleware
import verifyToken from "../middleware/verify-token.js";

const router = Router();

router.post("/cadastro", create);
router.post("/login", login);
router.post("/inscricao", inscricao);

// router.get("/logout",verifyToken, logout);


export default router;
