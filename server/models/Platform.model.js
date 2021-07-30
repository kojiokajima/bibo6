const mongoose = require('mongoose')

const platformSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  url: {
    type: String,
  },
  appliedAt: {
    type: Date,
  },
  respondedAt: {
    type: Date,
  },

})

module.exports = mongoose.model('Platform', platformSchema)