const { Router } = require('express')
const { createBook, getAllBooks } = require('../controllers/booksControllers')

function booksRouter () {
  const router = Router()

  router
    .route('/')
    .post(createBook)
    .get(getAllBooks)

  return router
}

module.exports = booksRouter()
