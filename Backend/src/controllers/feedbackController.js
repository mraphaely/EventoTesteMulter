import Feedback from "../models/feedbackModel.js";
import { z } from "zod";

// Validar tarefa
const createSchema = z.object({
    mensagem: z.string({
        invalid_type_error: "A mensagem deve ser um texto",
        required_error: "A mensagem é obrigatória"
    }),
});
//validar id
const idSchema = z.object({
    id: z.string().uuid({ message: 'ID inválido' })
});

// POST -> criar
export const enviarMensagem = async (request, response) => {
    const createValidation = createSchema.safeParse(request.body);
    if (!createValidation.success) {
        return response.status(400).json(createValidation.error);
    }

    const { mensagem } = createValidation.data;
    const novaMensagem = { mensagem };

    try {
        const addMensagem = await Feedback.create(novaMensagem);
        response.status(201).json({ message: "Mensagem enviada com sucesso", addMensagem });
    } catch (error) {
        console.log(error)
        response.status(500).json({ message: "Erro ao enviar mensagem" });
    }
};

// GET => 3333/eventos/select?page=1&limit=10
export const getMensagens = async (request, response) => {
    try {
        const eventos = await Feedback.findAll();
        response.status(200).json(eventos);
    } catch (error) {
        console.error("Erro ao listar eventos:", error);
        response.status(500).json({ error: "Erro ao listar eventos" });
    }
};

//GET -> pegar tarefa por id
export const getMensagem = async (request, response) => {
    const idValidation = idSchema.safeParse(request.params);
    if (!idValidation.success) {
        return response.status(400).json({ message: idValidation.error });
    }
    const id = idValidation.data.id;

    try {
        const mensagem = await Feedback.findByPk(id);
        if (!mensagem) {
            return response.status(404).json({ message: "Mensagem não encontrada" });
        }
        response.status(200).json(mensagem);

    } catch (error) {
        console.log(error);
        response.status(500).json({ message: "Erro ao buscar mensagem" });
    }
};