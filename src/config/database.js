const { underscoredIf } = require("sequelize/lib/utils");

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: "postgres",
  password: 'kaua1630',
  database: 'taslist',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  }

}
