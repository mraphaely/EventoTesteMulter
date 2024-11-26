import { Router } from "express";
import { enviarMensagem, getMensagem, getMensagens } from "../controllers/feedbackController.js";

const router = Router();

router.post('/enviar', enviarMensagem);
router.get('/listar', getMensagens);
router.get('/:id', getMensagem);

export default router;