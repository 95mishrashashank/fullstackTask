import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.straregy';
import { GoogleStrategy } from './google.strategy';
import { FacebookStrategy } from './facebook.strategy';

@Module({
  imports: [PassportModule, JwtModule.register({ secret: 'secretKey' })],
  providers: [AuthService, JwtStrategy,GoogleStrategy,
    FacebookStrategy,],
})
export class AuthModule {}