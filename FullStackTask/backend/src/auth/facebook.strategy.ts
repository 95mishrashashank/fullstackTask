import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-facebook';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor(private readonly configService: ConfigService) {
    const clientID = configService.get<string>('FACEBOOK_CLIENT_ID');
    const clientSecret = configService.get<string>('FACEBOOK_CLIENT_SECRET');
    const callbackURL = configService.get<string>('FACEBOOK_CALLBACK_URL');
    super({
      clientID,
      clientSecret,
      callbackURL,
      profileFields: ['emails', 'name'],
      scope: ['email'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any, done: any): Promise<any> {
    const { name, emails } = profile;
    const user = {
      email: emails[0].value,
      name: `${name.givenName} ${name.familyName}`,
      accessToken,
    };
    done(null, user);
  }
}
