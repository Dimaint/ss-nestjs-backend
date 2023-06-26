import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GroupsService {
  constructor(private prisma: PrismaService) {}

  async create(createGroupDto: CreateGroupDto) {
    // return 'This action adds a new group';
    await this.prisma.group.create({
      data: {
        name: 'test relation',
        scheduleId: 1,
        employes: {
          create: [
            {
              last_name: 'test relation',
              first_name: 'test relation',
              rank: 'Trainer',
            },
          ],
        },
      },
    });
  }

  async findAll(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const data = await this.prisma.group.findMany({
      skip: skip,
      take: limit,
    });
    const total = await this.prisma.group.count();
    return { total: total, rez: data };
  }

  async findByEmployee(page: number, limit: number, employee_id: number) {
    const skip = (page - 1) * limit;
    const data = await this.prisma.group.findMany({
      skip: skip,
      take: limit,
      where: {
        employes: {
          some: {
            id: employee_id,
          },
        },
      },
    });
    const total = await this.prisma.group.count({
      where: {
        employes: {
          some: {
            id: employee_id,
          },
        },
      },
    });
    return { total: total, rez: data };
  }

  async findOne(id: number) {
    const data = await this.prisma.group.findUnique({
      where: { id },
      include: {
        client: true,
      },
    });
    return data;
  }

  update(id: number, updateGroupDto: UpdateGroupDto) {
    return `This action updates a #${id} group`;
  }

  remove(id: number) {
    return `This action removes a #${id} group`;
  }
}
