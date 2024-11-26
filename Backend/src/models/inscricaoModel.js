import { DataTypes } from "sequelize";
import conn from "../config/conn.js";

import Usuario from "./usuarioModel.js";

const Inscricao = conn.define("inscricoes", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    validate: {
      isUUID: 4,
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      min: 5,
    },
  },
  quantidade_ingresso: {
    type: DataTypes.STRING,
    allowNull: false
  },
  usuario_id: {
    type: DataTypes.UUID,
    references: {
      model: Usuario,
      key: "id",
    },
    onDelete: "CASCADE",
  },
});

Inscricao.belongsTo(Usuario, { foreignKey: "usuario_id" });

export default Inscricao;
