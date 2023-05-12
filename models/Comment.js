const mongoose = require("mongoose")


const CommentSchema = new mongoose.Schema({
    owner: { type: String, required: true },
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

module.exports = mongoose.model('Comment', CommentSchema)
