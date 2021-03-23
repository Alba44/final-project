const { createUser, getAllUsers, updateUserDetails, getOneUser, addBookToUser, deleteBookFromUser } = require('./usersControllers')
const User = require('../models/userModel')

jest.mock('../models/userModel')

describe('Given a createUsers function', () => {
  describe('When it is invoked', () => {
    test('Then res.json should be called', () => {
      User.create = jest.fn().mockImplementationOnce((query, callBack) => {
        callBack(false, {})
      })

      const req = {
        body: null
      }

      const res = {
        json: jest.fn()
      }

      createUser(req, res)

      expect(res.json).toHaveBeenCalled()
    })

    test('Then res.send should be called', () => {
      User.create.mockImplementationOnce((query, callBack) => {
        callBack(true, {})
      })

      const req = {
      }

      const res = {
        send: jest.fn()
      }

      createUser(req, res)

      expect(res.send).toHaveBeenCalled()
    })
  })
})

describe('Given a getAllUsers function', () => {
  describe('When it is invoked', () => {
    test('Then res.json should be called', async () => {
      const req = {}

      const res = {
        json: jest.fn()
      }

      await getAllUsers(req, res)

      expect(res.json).toHaveBeenCalled()
    })
  })
})

describe('Given a getOneUser function', () => {
  describe('When it is invoked', () => {
    test('Then res.json should be called', async () => {
      const req = { params: { userId: 'userId' } }

      const res = {
        status: jest.fn(),
        send: jest.fn(),
        json: jest.fn()
      }

      User.findById.mockReturnValueOnce({ populate: jest.fn() })

      await getOneUser(req, res)

      expect(res.json).toHaveBeenCalled()
    })

    test('Then res.send should be called', async () => {
      const req = { params: { userId: null } }

      const res = {
        status: jest.fn(),
        send: jest.fn()
      }

      User.findById.mockImplementationOnce(() => { throw new Error() })

      await getOneUser(req, res)

      expect(res.send).toHaveBeenCalled()
      expect(res.status).toHaveBeenCalled()
    })
  })
})

describe('Given a updateUserDetails function', () => {
  describe('When it is invoked', () => {
    test('Then res.json should be called', async () => {
      User.findByIdAndUpdate = jest.fn().mockImplementationOnce((query, update, {}, callBack) => callBack(false, {}))

      const req = {
        params: { userId: 'userId' },
        body: 'body'
      }

      const res = {
        send: jest.fn(),
        json: jest.fn()
      }

      await updateUserDetails(req, res)

      expect(res.json).toHaveBeenCalled()
    })

    test('Then res.send should be called', async () => {
      User.findByIdAndUpdate = jest.fn().mockImplementationOnce((query, update, {}, callBack) => callBack(true, {}))
      const req = {
        params: { bookId: 'bookId' },
        body: 'body'
      }

      const res = {
        send: jest.fn(),
        json: jest.fn()
      }

      await updateUserDetails(req, res)

      expect(res.send).toHaveBeenCalled()
    })
  })
})

describe('Given a addBookToUser function', () => {
  describe('When it is invoked', () => {
    test('Then res.json should be called', async () => {
      const req = {
        params: { userId: 'userId' }
      }

      const res = {
        status: jest.fn(),
        send: jest.fn(),
        json: jest.fn()
      }

      const user = {
      }

      User.findById.mockReturnValueOnce(user)
      User.findByIdAndUpdate = jest.fn().mockImplementationOnce((query, update))

      await addBookToUser(req, res)

      expect(res.json).toHaveBeenCalled()
    })

    test('Then res.send should be called', async () => {
      const req = {
        params: { bookId: 'bookId' },
        body: 'body'
      }

      const res = {
        status: jest.fn(),
        send: jest.fn(),
        json: jest.fn()
      }

      User.findByIdAndUpdate = jest.fn().mockImplementationOnce(() => { throw new Error() })

      await addBookToUser(req, res)

      expect(res.send).toHaveBeenCalled()
    })
  })
})

describe('Given a deleteBookFromUser function', () => {
  describe('When it is invoked', () => {
    test('Then res.json should be called', async () => {
      const req = {
        params: { userId: 'userId' },
        body: { bookId: 'bookId' }
      }

      const res = {
        send: jest.fn(),
        json: jest.fn()
      }

      const user = {
        books: ['book']
      }

      User.findById.mockReturnValueOnce(user)
      User.findByIdAndUpdate = jest.fn().mockImplementationOnce((query, update, callBack) => callBack(false, {}))

      await deleteBookFromUser(req, res)

      expect(res.json).toHaveBeenCalled()
    })

    test('Then res.send should be called', async () => {
      const req = {
        params: { userId: 'userId' },
        body: { bookId: 'bookId' }
      }

      const res = {
        send: jest.fn(),
        json: jest.fn()
      }

      const user = {
        books: ['book']
      }

      User.findById.mockReturnValueOnce(user)
      User.findByIdAndUpdate = jest.fn().mockImplementationOnce((query, update, callBack) => callBack(true, {}))

      await deleteBookFromUser(req, res)

      expect(res.send).toHaveBeenCalled()
    })
  })
})
