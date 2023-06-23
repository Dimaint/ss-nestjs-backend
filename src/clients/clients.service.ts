import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClientsService {
  constructor(private prisma: PrismaService) {}

  create(createClientDto: CreateClientDto) {
    return 'This action adds a new client';
  }

  async findAll(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const data = await this.prisma.client.findMany({
      skip: skip,
      take: limit,
    });
    const total = await this.prisma.client.count();
    return { total: total, rez: data };
  }

  async findByGroup(page: number, limit: number, id: number) {
    const skip = (page - 1) * limit;
    const data = await this.prisma.client.findMany({
      skip: skip,
      take: limit,
      where: { group: { id } },
    });
    const total = await this.prisma.client.count();
    return { total: total, rez: data };
  }

  findOne(id: number) {
    return `This action returns a #${id} client`;
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
}
