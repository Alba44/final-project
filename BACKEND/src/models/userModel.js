const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  nickname: String,
  name: String,
  DOB: String,
  city: String,
  email: String,
  password: String,
  creationDate: { type: Date, default: Date.now },
  books: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
  photo: String
})

userSchema.methods.validPassword = function validPassword (pwd) {
  return this.password === (pwd)
}

module.exports = model('User', userSchema)
