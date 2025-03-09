import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.straregy';

@Module({
  imports: [PassportModule, JwtModule.register({ secret: 'secretKey' })],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}