const Sequelize = require('sequelize');
const sequelize = require('../connection')

module.exports = sequelize.define('pins', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: Sequelize.INTEGER
  },
  url: {
    type: Sequelize.STRING
  },
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE,
  deleted_at: Sequelize.DATE,
}, {
    underscored: true,
    tableName: 'pins',
  })

