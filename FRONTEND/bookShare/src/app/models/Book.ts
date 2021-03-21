export interface Book {
  _id: string,
  lender: string,
  title: string,
  author_name: string[],
  first_publish_year: number,
  covers: string,
  description: string,
  available: boolean
}
