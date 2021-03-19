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

  function getUserBooks (req, res) {
    const { userId } = req.params // id del user
    Book.find({ lender: userId }, (error, searchedBooks) => {
      error
        ? res.send('An error occured while trying to retrieve a user\'s book')
        : res.json(searchedBooks)
    })
  }

  function getOneBook (req, res) {
    const { bookId } = req.params // id del book
    Book.findById(bookId, (error, searchedBook) => {
      error
        ? res.send('An error occured while trying to retrieve a book')
        : res.json(searchedBook)
    })
  }

  return {
    createBook,
    getAllBooks,
    getUserBooks,
    getOneBook
  }
}

module.exports = booksControllers()
