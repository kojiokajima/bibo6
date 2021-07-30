const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const authRouters = require('./routes/auth')
const listRouters = require('./routes/list')
const User = require('./models/User.model')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));


// -------------Middlewares-------------
app.use(authRouters);
app.use(listRouters)



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