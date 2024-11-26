import { DataTypes } from "sequelize";
import conn from "../config/conn.js";

import Usuario from "./usuarioModel.js";

const Feedback = conn.define("feedbacks", {
   id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        validate: {
            isUUID: 4
        }
    },
    mensagem: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            min: 3
        }
    },
    usuario_id: {
        type: DataTypes.UUID,
        references: {
          model: Usuario,
          key: "id"
        },
        onDelete: "CASCADE"
    },

});

Feedback.belongsTo(Usuario, { foreignKey: "usuario_id" });

export default Feedback;