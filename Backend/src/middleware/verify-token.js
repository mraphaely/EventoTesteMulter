import jwt from "jsonwebtoken";
import getToken from "../helper/get-token.js";

const verifyToken = (request, response, next) => {
  if (!request.headers.authorization) {
    return response
      .status(401)
      .json({ message: "Acesso negado! Cabeçalho de autorização ausente." });
  }

  const token = getToken(request);
  if (!token) {
    return response
    .status(401)
    .json({ message: "Acesso negado! Token não fornecido ou inválido." });;
  }

  try {
    const verified = jwt.verify(token, 'SENHASUPERSEGURA')
    request.usuario = verified.id
    next()
  } catch (error) {
    console.log(error)
    response.status(400).json({ message: "Token Inválido!" });
  }
};

export default verifyToken;
