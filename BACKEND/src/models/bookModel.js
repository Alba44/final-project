const { Schema, model } = require('mongoose')

const bookSchema = new Schema({
  title: String,
  author: String,
  publishYear: Number,
  description: String,
  ISBN: Number,
  language: String,
  subject: String,
  timesBorrowed: Number,
  lender: [{ type: Schema.Types.ObjectId, ref: 'User' }]
})

module.exports = model('Book', bookSchema)
