import Usuario from "../models/usuarioModel.js";
import conn from "../config/conn.js";
import { z } from 'zod';

//helpers
import createUserToken from "../helper/create-user-token.js";
import getToken from "../helper/get-token.js";
import getUserByToken from "../helper/get-user-by-token.js";
import Inscricao from "../models/inscricaoModel.js";

const createSchema = z.object({
    email: z.string({
        invalid_type_error: "O titulo do evento deve ser um texto",
        required_error: "Titulo é obrigatório"
    }),
    quantidade_ingresso: z.string({
        invalid_type_error: "O local do evento deve ser um texto",
        required_error: "Local é obrigatório"
    }),
});

export const create = async (request, response) => {
  const { email, senha, verifica_senha } = request.body;

  try {
    if (senha != verifica_senha) {
      response.status(404).json({ message: "As senhas devem ser iguais" });
    } else {
      await Usuario.create({ email, senha, verifica_senha });
      response.status(201).json({ mensagem: "Usuário cadastrado com sucesso" });
    }
  } catch (error) {
    response.status(500).json({ err: "err" }, error);
  }
};

export const login = async (request, response) => {
  const { email, senha } = request.body;

  try {
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario) {
      response.status(400).json({ err: "Usuário não encontrado" });
      return;
    }

    const verificaSenha = await Usuario.findByPk(usuario.id);
    if (verificaSenha.senha !== senha) {
      response.status(400).json({ err: "Senha não confere" });
      return;
    }

    createUserToken(usuario, request, response);
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Erro ao fazer login" });
  }
};

export const logout = async (request, response) => {
  response.status(200).json({ message: "Logout realizado com sucesso." });
};

export const inscricao = async (request, response) => {
  try {
    const createValidation = createSchema.safeParse(request.body);
    if (!createValidation.success) {
      return response.status(400).json(createValidation.error);
    }

    const { email, quantidade_ingresso  } = createValidation.data;
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario) {
      response.status(400).json({ err: "Usuário não encontrado" });
      return;
    }

    const inscricao = { email, quantidade_ingresso };
    const addIncricao = await Inscricao.create(inscricao);
        response.status(201).json({ message: "Inscrição adicionada com sucesso!", addIncricao });
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Erro ao fazer inscrição" });
  }
};
