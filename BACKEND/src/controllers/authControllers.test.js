const User = require('../models/userModel')
const { register, login } = require('./authControllers')

describe('Given a register function', () => {
  describe('When invoked', () => {
    test('Then json should have been called', () => {
      const req = {
        body: {
          email: null, password: null
        },
        login: jest.fn().mockImplementationOnce((user, callBack) => callBack())
      }

      const res = {
        send: jest.fn(),
        status: jest.fn()
      }

      register(req, res)

      expect(res.json).toHaveBeenCalled()
    })

    test('Then send should have been called', () => {
      const req = {
        body: { email: 'email', password: 'password' },
        login: jest.fn()
      }

      const res = {
        redirect: jest.fn(),
        send: jest.fn(),
        status: jest.fn()
      }

      register(req, res)

      expect(res.send).toHaveBeenCalled()
    })
  })
})

describe('Given a login function', () => {
  describe('When invoked', () => {
    test('Then json should have been called', () => {
      User.findOne = jest.fn().mockImplementationOnce((query, callBack) => {
        callBack(false, {})
      })

      const req = {
        body: null
      }

      const res = {
        json: jest.fn(),
        send: jest.fn(),
        status: jest.fn()
      }

      login(req, res)

      expect(res.json).toHaveBeenCalled()
    })

    test('Then send should have been called', () => {
      User.findOne = jest.fn().mockImplementationOnce((query, callBack) => {
        callBack(true, {})
      })

      const req = {
        body: null
      }

      const res = {
        send: jest.fn(),
        status: jest.fn()
      }

      login(req, res)

      expect(res.send).toHaveBeenCalled()
    })
  })
})
