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
      console.log("NEW USER: ", newUser)
      newUser.save().then(() => {
        // res.status(200).send(newUser)
      })
    } else {
      console.log("EXISTING USER: ", user);
      // res.status(200).send(user)
    }
    res.redirect('http://localhost:3000/dashboard')
  }).catch((err) => {
    console.log(err)
  })
}

exports.getUserInfo = (req, res, next) => {
  // const { email } = req.body
  // User.findOne({ email: email }).then((user) => {
  //   res.status(200).send({ user: user })
  // })
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
      // console.log("NEW USER: ", newUser.email)
      newUser.save().then(() => {
        res.status(200).send(newUser)
      })
    } else {
      // console.log("EXISTING USER: ", user.email);
      res.status(200).send(user)
    }
    // res.redirect('http://localhost:3000/dashboard')
  }).catch((err) => {
    console.log(err)
  })
}