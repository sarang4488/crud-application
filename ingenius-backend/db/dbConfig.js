var Sequelize = require("sequelize");

const db = "ingeniousPrep";
const username = "root";
const password = "sehaj131";
const sequelize = new Sequelize(db, username, password, {
  host: "localhost",
  dialect: "mariadb",
  port: 3306,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const student_model = require("./model/studentModel");

const student_table = student_model(sequelize, Sequelize);

sequelize.sync({ force: false }).then(() => {
  console.log(`Database & tables created!`);
});

module.exports = {
  sequelize,
  student_table
};
