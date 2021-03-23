describe('Given a validPassword function', () => {
  describe('When invoked', () => {
    test('Then it should return ', () => {
      const userSchema = {
        password: 'password',
        methods: {
          validPassword: jest.fn()
        }
      }

      expect(userSchema.methods.validPassword).toBeDefined()
    })
  })
})
