const { createUser, getAllUsers } = require('./usersControllers')
const User = require('../models/userModel')

jest.mock('../models/userModel')

describe('Given a createUsers function', () => {
  describe('When it is invoked', () => {
    test('Then res.json should be called', () => {
      User.create = jest.fn().mockImplementationOnce((query, cbFn) => {
        cbFn(false, {})
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
      User.create.mockImplementationOnce((query, cbFn) => {
        cbFn(true, {})
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
