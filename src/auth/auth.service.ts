import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { RegistrationDto } from './dto/auth-user.dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async signIn(username: string, pass: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        username,
      },
    });
    const isMatch = await bcrypt.compare(pass, user?.password);
    if (isMatch == false) {
      throw new UnauthorizedException();
    }
    // const { password, ...result } = user;
    // return result;

    const payload = {
      user_id: user.id,
      username: user.username,
      role: user.role,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
      user_id: user.id,
      role: user.role,
    };
  }

  async registration(username: string, registrationDto: RegistrationDto) {
    // console.log(registrationDto);
    if (registrationDto.password != registrationDto.confirmPassword) {
      throw new BadRequestException('confirm password does not match', {
        cause: new Error(),
        description: 'confirm password does not match',
      });
    }
    const user = await this.prisma.user.findUnique({
      where: {
        username,
      },
    });
    if (user) {
      throw new BadRequestException('username already exists', {
        cause: new Error(),
        description: 'username already exists',
      });
    }

    const saltOrRounds = 10;
    const hashPass = await bcrypt.hash(registrationDto.password, saltOrRounds);
    // console.log(hashPass);
  }

  async getUserProfile(user: any) {
    const employeeInfo = await this.prisma.employee.findUnique({
      where: {
        userId: user.user_id,
      },
    });
    if (!employeeInfo) {
      const clientInfo = await this.prisma.employee.findUnique({
        where: {
          userId: user.user_id,
        },
      });
      return clientInfo;
    } else {
      return employeeInfo;
    }
  }
}
