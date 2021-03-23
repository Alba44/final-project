describe('Given a validPassword function', () => {
  describe('When invoked', () => {
    test('Then it should return ', () => {
      const userSchema = {
        password: 'password',
        methods: {
          validPassword: jest.fn()
        }
      }

      userSchema.methods.validPassword = jest.fn().mockImplementationOnce()

      expect(userSchema.methods.validPassword).toHaveBeenCalled()
    })
  })
})
