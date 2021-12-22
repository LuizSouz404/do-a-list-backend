class CheckEmailIsAlreadyInUse {
  constructor(private readonly checkEmailRepository: CheckEmailRepository) {}

  async perform(email: string): Promise<void> {

  }
}

class CheckEmailRepository {
  email?: string
}

describe('CheckEmailIsAlreadyInUse', () => {
  it('should check if an user already exists', async () => {
    const checkEmailRepository = new CheckEmailRepository()
    const checkEmailIsAlreadyInUse = new CheckEmailIsAlreadyInUse(checkEmailRepository)

    await checkEmailIsAlreadyInUse.perform('email')

    expect(checkEmailRepository.email).toBe('email')
  })
})