const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  photoUrl: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
  platforms: [{
    type: String
  }],
  skills: [{
    type: String,
  }],
  companies: [{
    type: Object,
    ref: 'Company'
  }]
})

module.exports = mongoose.model("User", userSchema)