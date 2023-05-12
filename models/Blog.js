const mongoose = require("mongoose")

const BlogSchema = new mongoose.Schema({
  author: { type: String, required: true },
  title: String,
  date: {
    type: Date,
    default: Date.now
  },
  headline: String,
  image: String,
  content: String,
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment',
    cascade: 'delete'
  }]
}, {
  timestamps: true
})

const Blog = mongoose.model('Blog', BlogSchema)


module.exports =  Blog
