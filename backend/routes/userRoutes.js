const express = require('express')
const { body } = require('express-validator')
const { protect } = require('../middleware/authMiddleware.js')
const {
  loginUser,
  deleteUser,
  registerUser,
  updateUser,
  myPosts,
} = require('../controller/userController')

const router = express.Router()

router.post(
  '/login',
  [
    body('email', 'invalid email address').isEmail(),
    body('password', 'password shuld be 8 chartecheter').isLength({ min: 8 }),
  ],
  loginUser
)
router.post(
  '/register',
  [
    body('name').isLength({ min: 4 }),
    body('email').isEmail(),
    body('userName').isLength({ min: 4 }),
    body('password').isLength({ min: 8 }),
  ],
  registerUser
)
router.route('/me/').put(protect, updateUser).delete(protect, deleteUser)
router.get('/me/posts', protect, myPosts)

module.exports = router
