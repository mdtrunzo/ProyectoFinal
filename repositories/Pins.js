const PinsModel = require('./../models/pins');
const Sequelize = require('sequelize')
const Op = Sequelize.Op


module.exports = {

  byId: function (id) {
    return PinsModel.find({
      where: { id }
    })
  },

  create: function (url) {
    return PinsModel.create({
      url: url
    })
  },

}
