const jwt = require('jsonwebtoken')
const expressAsyncHandler = require('express-async-handler')
const userModel = require('../models/userModel')

const protect = expressAsyncHandler(async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]
      const { id } = jwt.verify(token, process.env.JWT_SECRET)
      const user = await userModel.findById(id).select('-password')
      req.user = user
      next()
    } catch (e) {
      res.status(400)
      throw new Error('Unauthorized, Invalid token')
    }
  }
  if (!token) {
    res.status(400)
    throw new Error('Unauthorized, no token')
  }
})

module.exports = { protect }
