const expressAsyncHandler = require('express-async-handler')
const postModel = require('../models/postModel.js')

// @route GET api/post/
// @desc get posts
// @Access private

const getPosts = expressAsyncHandler(async (req, res) => {
  const posts = await postModel
    .find({})
    .select('-comments')
    .populate({ path: 'user', select: 'name' })
  if (posts) {
    const post_ = posts.map((e, i) => {
      if (e.like.find((el) => el.toString() === req.user.id)) {
        return {
          ...e._doc,
          myLike: true,
          likeCount: e.like.length,
        }
      } else {
        return { ...e._doc, myLike: false, likeCount: e.like.length }
      }
    })
    res.json(post_)
  } else {
    res.status(404)
    throw new Error('no posts found')
  }
})

// @route POST api/post/
// @desc create post
// @Access private

const cretePost = expressAsyncHandler(async (req, res) => {
  const { content } = req.body
  const post = await postModel.create({ content, user: req.user.id })
  res.status(201).json(post)
})

// @route PUT api/post/
// @desc update post
// @Access private

const updatePost = expressAsyncHandler(async (req, res) => {
  res.json('post route ')
})

// @route DELETE api/post/
// @desc delete post
// @Access private

const deletePost = expressAsyncHandler(async (req, res) => {
  const { id } = req.params
  const post = await postModel.findById(id)
  if (post) {
    await post.remove()
    res.json({ message: 'post deleted' })
  } else {
    throw new Error('post not found')
  }
})

// @route POST api/post/comment
// @desc create comment
// @Access private

const createComment = expressAsyncHandler(async (req, res) => {
  const post = await postModel.findById(req.params.id)
  if (post) {
    post.comments.push({
      content: req.body.comment,
      userId: req.user.id,
      userName: req.user.userName,
    })
    post.save()
    res.json(post)
  } else {
    throw new Error('post not found')
  }
})

// @route PUT api/like/:id
// @desc add like
// @Access private

const addLike = expressAsyncHandler(async (req, res) => {
  try {
    const post = await postModel.findById(req.params.id)
    if (post.like.some((e) => e.toString() === req.user.id)) {
      res.json({ message: 'you liked it' })
    } else {
      post.like.push(req.user.id)
      await post.save()
      res.json(post)
    }
  } catch {
    res.status(404)
    throw new Error('post not found')
  }
})

// @route DELETE api/like/:id
// @desc dislike
// @Access private

const removeLike = expressAsyncHandler(async (req, res) => {
  try {
    const post = await postModel.findById(req.params.id)
    if (!post.like.some((e) => e.toString() === req.user.id)) {
      res.json({ message: `you didn't liked it` })
    } else {
      post.like = post.like.filter((e) => e.toString() !== req.user.id)
      await post.save()
      res.json(post)
    }
  } catch {
    res.status(404)
    throw new Error('post not found')
  }
})

module.exports = {
  getPosts,
  cretePost,
  updatePost,
  deletePost,
  createComment,
  addLike,
  removeLike,
}
