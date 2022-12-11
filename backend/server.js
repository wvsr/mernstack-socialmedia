const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDb = require('./config/db')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')

const app = express()
connectDb()

app.use(express.json())
app.use(cors())

app.use('/api/user', require('./routes/userRoutes.js'))
app.use('/api/post', require('./routes/postRoutes.js'))
app.use(notFound)
app.use(errorHandler)

app.listen(5000, () => {
  console.log('Omg smai book successfully run')
})
