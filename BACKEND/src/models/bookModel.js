const { Schema, model } = require('mongoose')

const bookSchema = new Schema({
  title: String,
  author_name: Array,
  first_publish_year: Number,
  description: String,
  covers: String,
  isbn: Number,
  language: String,
  subject: String,
  timesBorrowed: Number,
  lender: { type: Schema.Types.ObjectId, ref: 'User' }
})

module.exports = model('Book', bookSchema)
