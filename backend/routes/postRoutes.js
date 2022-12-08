const express = require('express')
const {
  cretePost,
  deletePost,
  getPosts,
  updatePost,
  createComment,
  addLike,
  removeLike,
} = require('../controller/postController.js')
const { protect } = require('../middleware/authMiddleware.js')
const router = express.Router()

router.get('/', protect, getPosts)
router.post('/', protect, cretePost)
router.route('/:id').delete(protect, deletePost).put(protect, updatePost)
router.route('/comment/:id').post(protect, createComment)
router.route('/like/:id').put(protect, addLike).delete(protect, removeLike)
module.exports = router
