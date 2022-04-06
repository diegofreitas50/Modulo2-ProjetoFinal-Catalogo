const Sequelize = require("sequelize");
const connect = require("../database/db");

const Receita = connect.define(
  "receitas",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ingredientes: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    preparo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    imagem: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    createdAt:false,
    updateAt:false,
  }
);

module.exports = Receita;