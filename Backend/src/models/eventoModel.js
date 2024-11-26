import { DataTypes } from "sequelize";
import conn from "../config/conn.js";

const Evento = conn.define("eventos", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        validate: {
            isUUID: 4
        }
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    local: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.BLOB,
        // allowNull: false
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    },
    palestrante: {
        type: DataTypes.STRING,
        allowNull: false
    },
    vagas: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ingresso: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
    },
    disponibilidade: {
        type: DataTypes.STRING,
    },
}, {
    tableName: "eventos",
}
);

export default Evento;