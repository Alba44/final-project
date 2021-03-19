export interface Book {
  _id: string,
  lender: [],
  title: string,
  // eslint-disable-next-line camelcase
  author_name: string[],
  firstPublishYear: number,
  covers: string
}
