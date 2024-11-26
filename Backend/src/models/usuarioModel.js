import { DataTypes } from "sequelize";
import conn from "../config/conn.js";

const Usuario = conn.define("usuarios", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        validate: {
            isUUID: 4
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    verifica_senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: "usuarios",
}
);

export default Usuario;