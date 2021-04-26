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

  async function getOneBook (req, res) {
    const { bookId } = req.params // id del book
    try {
      const selectedBook = await Book.findById(bookId)
        .populate('lender')
      res.json(selectedBook)
    } catch (error) {
      res.status(500)
      res.send('An error occured while trying to retrieve a book')
    }
  }

  async function updateBookDetails (req, res) {
    const { bookId } = req.params
    const update = req.body
    await Book.findByIdAndUpdate(bookId, update, { new: true }, (updateError, updatedBook) => {
      updateError
        ? res.send('An error occured while trying to update the book')
        : res.json(updatedBook)
    })
  }

  async function deleteBook (req, res) {
    const { bookId } = req.params
    await Book.findByIdAndDelete(bookId, (deleteError, deletedBook) => {
      deleteError
        ? res.send('An error occured while trying to delete the book')
        : res.json(deletedBook)
    })
  }

  return {
    createBook,
    getAllBooks,
    getUserBooks,
    getOneBook,
    updateBookDetails,
    deleteBook
  }
}

module.exports = booksControllers()
