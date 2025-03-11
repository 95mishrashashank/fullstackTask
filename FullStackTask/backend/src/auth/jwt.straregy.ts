import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    const configService = new ConfigService();
    const secretKey=configService.get<string>('JWT_SECRET_KEY')
    if(secretKey)
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: secretKey,
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}