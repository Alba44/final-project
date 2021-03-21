const { Router } = require('express')
const { createBook, getAllBooks, getUserBooks, getOneBook, updateBookDetails } = require('../controllers/booksControllers')

function booksRouter () {
  const router = Router()

  router
    .route('/book/:bookId')
    .get(getOneBook)
    .put(updateBookDetails)

  router
    .route('/user/:userId')
    .get(getUserBooks)

  router
    .route('/')
    .post(createBook)
    .get(getAllBooks)

  return router
}

module.exports = booksRouter()
