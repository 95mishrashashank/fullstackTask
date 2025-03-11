import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from '../auth.controller';
import { AuthService } from '../auth.service';

describe('AuthController', () => {
  let authController: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: {
            googleLogin: jest.fn(),
            facebookLogin: jest.fn(),
          },
        },
      ],
    }).compile();

    authController = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
  });

  it('should login with Google', async () => {
    const mockUser = { email: 'test@gmail.com', name: 'John' };
    jest.spyOn(authService, 'googleLogin').mockResolvedValue(mockUser);

    const result = await authController.googleAuth();
    expect(result).toEqual(mockUser);
  });

  it('should login with Facebook', async () => {
    const mockUser = { email: 'test@gmail.com', name: 'John' };
    jest.spyOn(authService, 'facebookLogin').mockResolvedValue(mockUser);

    const result = await authController.facebookAuth();
    expect(result).toEqual(mockUser);
  });

  it('should throw 401 if not authenticated', async () => {
    jest.spyOn(authService, 'googleLogin').mockRejectedValue(new Error('Unauthorized'));

    await expect(authController.googleAuth()).rejects.toThrow('Unauthorized');
  });
});
