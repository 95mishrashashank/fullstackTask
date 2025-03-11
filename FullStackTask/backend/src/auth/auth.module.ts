import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.straregy';
import { GoogleStrategy } from './google.strategy';
import { FacebookStrategy } from './facebook.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports: [PassportModule, JwtModule],
  controllers: [AuthController], 
  providers: [AuthService, JwtStrategy,GoogleStrategy,
    FacebookStrategy,],
})
export class AuthModule {}
