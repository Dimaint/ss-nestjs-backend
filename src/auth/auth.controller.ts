import {
  Get,
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto, RegistrationDto } from './dto/auth-user.dto';
import { AuthGuard } from './auth.guard';
import { Public } from './auth.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('login')
  signIn(@Body() authDto: AuthDto) {
    return this.authService.signIn(authDto.username, authDto.password);
  }

  @Post('registration')
  registration(@Body() registrationDto: RegistrationDto) {
    return this.authService.registration(
      registrationDto.username,
      registrationDto,
    );
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    // console.log(req)
    return this.authService.getUserProfile(req.user);
  }
}
