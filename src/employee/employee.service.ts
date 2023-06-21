import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EmployeeService {
  constructor(private prisma: PrismaService) {}
  create(createEmployeeDto: CreateEmployeeDto) {
    return this.prisma.employee.create({ data: createEmployeeDto });
  }

  async findAll(page: number, limit: number) {
    const skip = page * limit;
    console.log('skip');
    console.log(skip);
    const data = await this.prisma.employee.findMany({
      skip: skip,
      take: limit,
    });
    const total = await this.prisma.employee.count();
    return { total: total, rez: data };
  }

  findOne(id: number) {
    return this.prisma.employee.findUnique({ where: { id } });
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
