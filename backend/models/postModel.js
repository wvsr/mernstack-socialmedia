const mongoose = require('mongoose')

const comments = mongoose.Schema(
  {
    content: { type: String, required: true },
    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    userName: String,
  },
  {
    timestamp: true,
  }
)

const postSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'user',
    },
    content: {
      type: String,
      required: true,
    },

    comments: [comments],
    like: {
      type: [mongoose.Types.ObjectId],
      ref: 'user',
    },
  },
  {
    timestamp: true,
  }
)

const postModel = mongoose.model('post', postSchema)

module.exports = postModel
