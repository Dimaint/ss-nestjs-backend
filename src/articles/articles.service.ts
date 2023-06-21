import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}

  create(createArticleDto: CreateArticleDto) {
    // return 'This action adds a new article';
    return this.prisma.article.create({ data: createArticleDto });
  }

  async findAll() {
    // return `This action returns all articles`;
    const data = await this.prisma.article.findMany();
    const total = await this.prisma.article.count();

    return { total: total, data: data };
  }

  findOne(id: number) {
    // return `This action returns a #${id} article`;
    return this.prisma.article.findUnique({ where: { id } });
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    // return `This action updates a #${id} article`;
    return this.prisma.article.update({
      where: { id },
      data: updateArticleDto,
    });
  }

  remove(id: number) {
    // return `This action removes a #${id} article`;
    return this.prisma.article.delete({ where: { id } });
  }
}
