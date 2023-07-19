import { Injectable } from '@nestjs/common';
import { CreateVisitLogDto } from './dto/create-visit-log.dto';
import { UpdateVisitLogDto } from './dto/update-visit-log.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VisitLogService {
  constructor(private prisma: PrismaService) {}

  async create(createVisitLogDto: CreateVisitLogDto) {
    const is_finded = await this.prisma.visitLog.findFirst({
      where: {
        clientId: createVisitLogDto.clientId,
        date: createVisitLogDto.date,
      },
    });
    console.log(is_finded);
    if (!is_finded) {
      return this.prisma.visitLog.create({ data: createVisitLogDto });
    }
  }

  findAll() {
    return `This action returns all visitLog`;
  }

  async findAllByGroupId(id: number) {
    const data = await this.prisma.client.findMany({
      where: { group: { id } },
    });
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} visitLog`;
  }

  update(id: number, updateVisitLogDto: UpdateVisitLogDto) {
    return `This action updates a #${id} visitLog`;
  }

  remove(id: number) {
    return `This action removes a #${id} visitLog`;
  }
}