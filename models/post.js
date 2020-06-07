const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: String,
  description: String,
  date: { type: Date, default: Date.now },
  content: String,
  link: String
});

module.exports = mongoose.model('posts', PostSchema);