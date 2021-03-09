const { createBook, getAllBooks } = require('./booksControllers')
const Book = require('../models/bookModel')

jest.mock('../models/bookModel')

describe('Given a createBook function', () => {
  describe('When it is invoked', () => {
    test('Then res.json should be called', () => {
      Book.create = jest.fn().mockImplementationOnce((query, callBack) => {
        callBack(false, {})
      })

      const req = {
        body: null
      }

      const res = {
        json: jest.fn()
      }

      createBook(req, res)

      expect(res.json).toHaveBeenCalled()
    })

    test('Then res.send should be called', () => {
      Book.create = jest.fn().mockImplementationOnce((query, callBack) => {
        callBack(true, {})
      })

      const req = {
        body: null
      }

      const res = {
        send: jest.fn()
      }

      createBook(req, res)

      expect(res.send).toHaveBeenCalled()
    })
  })
})

describe('Given a getAllBooks function', () => {
  describe('When it is invoked', () => {
    test('Then res.json should be called', async () => {
      const req = {
        body: null
      }

      const res = {
        json: jest.fn()
      }

      await getAllBooks(req, res)

      expect(res.json).toHaveBeenCalled()
    })
  })
})
