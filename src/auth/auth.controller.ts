import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './get-user.decorator';
import { User } from './user.entity';
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

  @Post('/signin')
  signIn(@Body() authCredentialDto: AuthCredentialDto) {
    return this.authService.signIn(authCredentialDto);
  }

  @Post('/test')
  @UseGuards(AuthGuard())
  test(@GetUser() user: User) {}
}
