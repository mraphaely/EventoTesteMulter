import jwt from "jsonwebtoken";

const createUserToken = (usuario, request, response) => {
  const token = jwt.sign(
    {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      nickname: usuario.nickname,
    },
    "SENHASUPERSEGURA",
    {
      expiresIn: "12h",
    }
  );

  response.status(200).json({
    message: "Você está autenticado",
    token: token,
    usuarioId: usuario.id,
  });
};

export default createUserToken;
