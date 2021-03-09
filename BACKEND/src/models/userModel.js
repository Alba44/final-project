const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  nickname: String,
  name: String,
  DOB: String,
  city: String,
  country: String,
  email: String,
  password: String,
  creationDate: { type: Date, default: Date.now },
  books: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
  totalBooks: Number,
  borrowedBooks: Number
})

module.exports = model('User', userSchema)
