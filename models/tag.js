const Sequelize = require('sequelize');
const sequelize = require('../connection')

module.exports = sequelize.define('tag', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING
  },
}, {
    underscored: true,
    tableName: 'tag',
  })

