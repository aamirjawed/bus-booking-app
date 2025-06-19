const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("testdb", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to the databases has been created using sequelize");
  } catch (error) {
    console.log(error);
  }
})();

module.exports = sequelize;
