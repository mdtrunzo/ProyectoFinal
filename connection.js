const Sequelize = require('sequelize');

const sequelize = new Sequelize('pinterest', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
})

module.exports = sequelize

// module.exports = new Sequelize('mysql://root:root@localhost:3306/social')