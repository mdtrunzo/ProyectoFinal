const VotesModel = require('./../models/votes');
const Sequelize = require('sequelize')
const Op = Sequelize.Op


module.exports = {

  vote: function (id_user, id_pin) {
    return VotesModel.create({
      pin_id: id_pin,
      user_id: id_user
    })
  }

}
