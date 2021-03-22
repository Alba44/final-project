const { createBook, getAllBooks, getUserBooks, getOneBook, deleteBook, updateBookDetails } = require('./booksControllers')
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

describe('Given a getUserBooks function', () => {
  describe('When it is invoked', () => {
    test('Then res.json should be called', () => {
      Book.find = jest.fn().mockImplementationOnce((query, callBack) => {
        callBack(false, {})
      })
      const req = {
        params: { userId: 'userId' }
      }

      const res = {
        json: jest.fn()
      }

      getUserBooks(req, res)

      expect(res.json).toHaveBeenCalled()
    })

    test('Then res.send should be called', async () => {
      Book.find = jest.fn().mockImplementationOnce((query, callBack) => {
        callBack(true, {})
      })
      const req = {
        params: { userId: 'userId' }
      }

      const res = {
        send: jest.fn()
      }

      await getUserBooks(req, res)

      expect(res.send).toHaveBeenCalled()
    })
  })
})

describe('Given a getOneBook function', () => {
  describe('When it is invoked', () => {
    test('Then res.json should be called', async () => {
      const req = { params: { bookId: 'bookId' } }

      const res = {
        status: jest.fn(),
        send: jest.fn(),
        json: jest.fn()
      }

      Book.findById.mockReturnValueOnce({ populate: jest.fn() })

      await getOneBook(req, res)

      expect(res.json).toHaveBeenCalled()
    })

    test('Then res.send should be called', async () => {
      const req = { params: { bookId: null } }

      const res = {
        status: jest.fn(),
        send: jest.fn()
      }

      Book.findById.mockImplementationOnce(() => { throw new Error() })

      await getOneBook(req, res)

      expect(res.send).toHaveBeenCalled()
      expect(res.status).toHaveBeenCalled()
    })
  })
})

describe('Given a updateBookDetails function', () => {
  describe('When it is invoked', () => {
    test('Then res.json should be called', async () => {
      Book.findByIdAndUpdate = jest.fn().mockImplementationOnce((query, update, {}, callBack) => callBack(false, {}))

      const req = {
        params: { bookId: 'bookId' },
        body: 'body'
      }

      const res = {
        send: jest.fn(),
        json: jest.fn()
      }

      await updateBookDetails(req, res)

      expect(res.json).toHaveBeenCalled()
    })

    test('Then res.send should be called', async () => {
      Book.findByIdAndUpdate = jest.fn().mockImplementationOnce((query, update, {}, callBack) => callBack(true, {}))
      const req = {
        params: { bookId: 'bookId' },
        body: 'body'
      }

      const res = {
        send: jest.fn(),
        json: jest.fn()
      }

      await updateBookDetails(req, res)

      expect(res.send).toHaveBeenCalled()
    })
  })
})

describe('Given a deleteBook function', () => {
  describe('When it is invoked', () => {
    test('Then res.json should be called', async () => {
      Book.findByIdAndDelete = jest.fn().mockImplementationOnce((query, callBack) => callBack(false, {}))

      const req = { params: { bookId: 'bookId' } }

      const res = {
        send: jest.fn(),
        json: jest.fn()
      }

      await deleteBook(req, res)

      expect(res.json).toHaveBeenCalled()
    })

    test('Then res.send should be called', async () => {
      Book.findByIdAndDelete = jest.fn().mockImplementationOnce((query, callBack) => callBack(true, {}))
      const req = { params: { bookId: 'bookId' } }

      const res = {
        send: jest.fn(),
        json: jest.fn()
      }

      await deleteBook(req, res)

      expect(res.send).toHaveBeenCalled()
    })
  })
})
