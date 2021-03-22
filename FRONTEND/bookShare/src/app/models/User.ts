import { Book } from './Book'

export interface User {
  _id: string,
  nickname: string,
  name: string,
  DOB: string,
  city: string,
  email: string,
  password: string,
  creationDate: string,
  books: Book[],
  photo: string
}
