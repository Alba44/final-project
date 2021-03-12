export interface User {
  nickname: String,
  name: String,
  DOB: String,
  city: String,
  country: String,
  email: String,
  password: String,
  creationDate: String,
  books: Array<{}>,
  totalBooks: Number,
  borrowedBooks: Number
}
