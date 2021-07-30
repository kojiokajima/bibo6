const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  position: {
    type: String,
  },
  platforms: [{
    type: Object,
    ref: 'Platform',
  }],
  questions: [{
    type: String
  }],
  requiredSkills: [{
    type: String,
  }],
  preferedSkills: [{
    type: String,
  }],
  salary: {
    type: Number
  },
  salaryUnit: {
    type: String,
  },
  status: {
    type: String,
  },
  memo: {
    type: String,
  },
  isStared: {
    type: Boolean,
  }


})

module.exports = mongoose.model('Company', companySchema)