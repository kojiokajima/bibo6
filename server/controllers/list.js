const User = require('../models/User.model')

exports.updateCompanyList = (req, res, next) => {
  const { email, companies } = req.body

  User.findOne({ email: email }).then((user) => {
    user.companies = companies
    return user.save()
  }).then(() => {
    res.end()
  }).catch((err) => {
    console.log(err)
  })
  res.send("HI")
}

exports.deleteCompany = (req, res, next) => {
  const { email, companies } = req.body

  User.findOne({ email: email }).then((user) => {
    user.companies = companies
    return user.save()
  }).then(() => {
    res.end()
  }).catch((err) => {
    console.log(err)
  })
  res.end()
}

exports.updateList = (req, res, next) => {
  const { email, skills, platforms } = req.body
  let updatedUser = {}

  User.findOne({ email: email }).then((user) => {
    user.skills = skills
    user.platforms = platforms
    return user.save()
    // console.log('user: ', user)
    // res.status(200).send(user)
  }).then(() => {
    res.end()
  }).catch((err) => {
    console.log(err)
  })
}