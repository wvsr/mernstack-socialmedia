const mongoose = require('mongoose')
const dotenv = require('dotenv')
const connectDb = async () => {
  try {
    const db = await mongoose.connect(process.env.DB_URL)

    console.log(`Successfully conected on ${db.connection.host}`)
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

module.exports = connectDb
