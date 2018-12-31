var mongoose = require('mongoose');

var customerSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  type: String
});

module.exports = mongoose.model('Customer', customerSchema);
