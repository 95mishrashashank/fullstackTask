import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async validateOAuthLogin(user: any, provider: string) {
    const payload = { 
      email: user.email,
      name: user.name,
      provider 
    };
    return this.jwtService.sign(payload);
  }
}
