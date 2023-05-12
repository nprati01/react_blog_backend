const mongoose = require("mongoose")

const CommentSchema = new mongoose.Schema({
    user: { type: String, required: true },
    date: {
      type: Date,
      default: Date.now
    },
    comment: { type: String, required: true },
    blog: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Blog',
      required: true,
      cascade: 'delete'
    }
  }, {
    timestamps: true
  })

  const Comment = mongoose.model('Comment', CommentSchema)

module.exports = { Comment }
