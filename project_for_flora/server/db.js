const { Sequelize } = require("sequelize");

const db = new Sequelize("flora_zelenograd", "postgres", "qwerty22", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
});

module.exports = db;
