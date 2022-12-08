const expressAsyncHandler = require('express-async-handler')
const userModel = require('../models/userModel.js')
const generateToken = require('../utils/generateToken.js')
const { validationResult } = require('express-validator')
const postModel = require('../models/postModel.js')

// @route POST api/user/login
// @desc login user
// @Access public

const loginUser = expressAsyncHandler(async (req, res) => {
  const err = validationResult(req)
  if (!err.isEmpty()) {
    res.status(400).json({ message: err.array })
  }
  const { email, password } = req.body

  const user = await userModel.findOne({ email })
  if (user && (await user.matchPassword(password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      username: user.userName,
      bio: user.bio,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid credential')
  }
})

// @route POST api/user/register
// @desc create user
// @Access public

const registerUser = expressAsyncHandler(async (req, res) => {
  const err = validationResult(req)
  if (!err.isEmpty()) {
    return res.status(400).json({ message: err.array() })
  }
  const { name, email, userName, password } = req.body

  const user = await userModel.create({ name, email, userName, password })
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      username: user.userName,
      bio: user.bio,
      token: generateToken(user._id),
    })
  } else {
    res.json(400)
    throw new Error('server side error')
  }
})

// @route DELETE api/post/me
// @desc delete user
// @Access private

const deleteUser = expressAsyncHandler(async (req, res) => {
  const { id } = req.user
  try {
    const user = await userModel.deleteOne({ id })
    res.status(200).json('user deleted')
  } catch {
    res.status(400)
    throw new Error('server side error')
  }
})
// @route PUT api/user/me
// @desc update user
// @Access private
const updateUser = expressAsyncHandler(async (req, res) => {
  res.json({ s: 'ss' })
})

const myPosts = expressAsyncHandler(async (req, res) => {
  const posts = await postModel.find({ user: req.user.id })
  if (posts) {
    res.json(posts)
  } else {
    res.status(404)
    throw new Error('Posts no found')
  }
})

module.exports = { loginUser, registerUser, deleteUser, updateUser, myPosts }
