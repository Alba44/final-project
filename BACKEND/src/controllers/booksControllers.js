const Book = require('../models/bookModel')

function booksControllers () {
  function createBook ({ body }, res) {
    Book.create(body, (error, newBook) => (
      error
        ? res.send('An error occured while trying to create a book')
        : res.json(newBook)
    ))
  }

  async function getAllBooks (req, res) {
    const allBooks = await Book.find({})
    res.json(allBooks)
  }

  return {
    createBook,
    getAllBooks
  }
}

module.exports = booksControllers()
