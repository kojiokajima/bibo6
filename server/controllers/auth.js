const User = require('../models/User.model')
const { defaultPlatForms, defaultSkills } = require('../defaultData')

exports.postSignInOrSignUp = (req, res, next) => {
  const { email, firstName, lastName, phoneNumber, photoUrl } = req.body

  User.findOne({ email: email }).then((user) => {
    if (!user) {
      const newUser = new User({
        email: email,
        firstName: firstName,
        lastName: lastName,
        photoUrl: photoUrl,
        phoneNumber: phoneNumber,
        platforms: defaultPlatForms,
        skills: defaultSkills,
        companies: [],
      })
      newUser.save().then(() => {
      })
    }
    res.redirect('/dashboard')
  }).catch((err) => {
    console.log(err)
  })
}

exports.getUserInfo = (req, res, next) => {
  const { email, firstName, lastName, phoneNumber, photoUrl } = req.body

  User.findOne({ email: email }).then((user) => {
    if (!user) {
      const newUser = new User({
        email: email,
        firstName: firstName,
        lastName: lastName,
        photoUrl: photoUrl,
        phoneNumber: phoneNumber,
        platforms: defaultPlatForms,
        skills: defaultSkills,
        companies: [],
      })
      newUser.save().then(() => {
        res.status(200).send(newUser)
      })
    } else {
      res.status(200).send(user)
    }
  }).catch((err) => {
    console.log(err)
  })
}