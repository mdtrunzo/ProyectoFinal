const Sequelize = require('sequelize');
const sequelize = require('../connection')

module.exports = sequelize.define('votes', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  pin_id: {
    type: Sequelize.INTEGER
  },
  user_id: {
    type: Sequelize.INTEGER
  },
}, {
    underscored: true,
    tableName: 'votes',
  })

