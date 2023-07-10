import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async signIn(username: string, pass: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        username,
      },
    });
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    // const { password, ...result } = user;
    // return result;

    const payload = { sub: user.id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
      user_id: user.id,
    };
  }
}
