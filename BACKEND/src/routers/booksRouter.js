const { Router } = require('express')
const { createBook, getAllBooks, getUserBooks, getOneBook } = require('../controllers/booksControllers')

function booksRouter () {
  const router = Router()

  router
    .route('/')
    .post(createBook)
    .get(getAllBooks)

  router
    .route('/:userId')
    .get(getUserBooks)

  router
    .route('/:bookId')
    .get(getOneBook)

  return router
}

module.exports = booksRouter()
