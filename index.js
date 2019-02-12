const Pins = require('./repositories/Pins');
const Tag = require('./repositories/Tag');
const Votes = require('./repositories/Votes')

Pins.create('hola').then(function (a) {
  console.log(a)
})

// Pins.byId(1).then(function (a) {
//   console.log(a)
// })

