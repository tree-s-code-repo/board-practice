import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth-credential.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('/')
  getAllUser(@Body() authCredentialDto: AuthCredentialDto) {
    return this.authService.getAll();
  }

  @Post('/signup')
  signUp(@Body() authCredentialDto: AuthCredentialDto) {
    return this.authService.signUp(authCredentialDto);
  }
}
