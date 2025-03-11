import { AuthService } from '../auth.service';

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(() => {
    authService = new AuthService();
  });

  it('should validate Google Login', async () => {
    const mockUser = { email: 'test@gmail.com', name: 'John' };
    const result = await authService.validateGoogleUser(mockUser);

    expect(result).toEqual({
      email: 'test@gmail.com',
      name: 'John',
      accessToken: expect.any(String),
    });
  });

  it('should throw error if user not found', async () => {
    await expect(authService.validateGoogleUser(null)).rejects.toThrow('User not found');
  });
});
