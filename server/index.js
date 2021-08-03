const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require("path")
// require('dotenv').config()
require('dotenv').config({ path: path.resolve(__dirname, './.env') })

const authRouters = require('./routes/auth')
const listRouters = require('./routes/list')
const User = require('./models/User.model')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../client/build')))

// -------------Middlewares-------------
app.use(authRouters);
app.use(listRouters)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

const PORT = process.env.PORT || 8080

mongoose.connect(process.env.MONGODB_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if (err) throw err
  console.log("Connected to database");

  app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
})
// mongoose.connect(process.env.MONGODB_URL, {
//   useCreateIndex: true,
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//   console.log("Connected to database");
//   app.listen(PORT, (req, res) => console.log(`server is running on port ${PORT}`))
// }).catch((err) => {
//   console.log(err)
// })