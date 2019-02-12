const TagModel = require('./../models/tag');
const Sequelize = require('sequelize')
const Op = Sequelize.Op


module.exports = {

  byName: function (name) {
    return TagModel.find({
      where: { name }
    })
  },

}
