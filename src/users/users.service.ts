import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async createUser(createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto });
  }
}
