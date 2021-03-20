import { Book } from './Book'

export interface User {
  _id: string,
  nickname: String,
  name: String,
  DOB: String,
  city: String,
  country: String,
  email: String,
  password: String,
  creationDate: String,
  books: Book[],
  totalBooks: Number,
  borrowedBooks: Number
}
