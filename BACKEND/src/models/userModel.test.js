let userSchema = require('./userModel')
const { validPassword } = require('./userModel')

describe('Given a validPassword function', () => {
  describe('When invoked', () => {
    test('Then it should return ', () => {
      userSchema = {
        password: 'password',
        methods: {
          validPassword: jest.fn()
        }
      }

      validPassword(mockArg)

      expect(userSchema.password).toBe(mockArg)
    })
  })
})
