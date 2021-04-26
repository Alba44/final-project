export interface Book {
  _id: string,
  lender: {
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
  },
  title: string,
  author_name: string[],
  first_publish_year: number,
  covers: string,
  description: string,
  available: boolean
}
