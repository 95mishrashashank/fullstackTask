import { Controller, Get, UseGuards, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleAuthGuard } from './google-auth.guard';
import { Response, Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google')
  @UseGuards(GoogleAuthGuard)
  async googleAuth() {
    // This will trigger the redirect to Google login
  }

  @Get('google/callback')
  @UseGuards(GoogleAuthGuard)
  async googleAuthRedirect(@Req() req: Request, @Res() res: Response) {
    const jwt = await this.authService.validateOAuthLogin(req.user, 'google');
    const redirectUrl = req.cookies['redirectUrl'] || '/dashboard';
    res.redirect(`${redirectUrl}?token=${jwt}`);
  }

  @Get('me')
  async getProfile(@Req() req: Request) {
    return req.user;
  }

  @Get('logout')
  async logout(@Res() res: Response) {
    res.clearCookie('jwt');
    res.redirect('/');
  }
}
