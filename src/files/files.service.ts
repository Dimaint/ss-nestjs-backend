import { Injectable } from '@nestjs/common';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { PrismaService } from 'src/prisma/prisma.service';
// import { fileType } from '@prisma/client';

@Injectable()
export class FilesService {
  constructor(private prisma: PrismaService) {}
  create(createFileDto: CreateFileDto) {
    return 'This action adds a new file';
  }

  findAll() {
    return `This action returns all files`;
  }

  findOne(id: number, fileType: string) {
    return this.prisma.files.findFirst({
      where: {
        id,
        fileType,
      },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} file`;
  }

  saveFile(
    objectId: number,
    file: Express.Multer.File,
    b64: any,
    fileType: string,
  ) {
    return this.prisma.files.create({
      data: {
        originalname: file.originalname,
        mimetype: file.mimetype,
        fileType: fileType,
        b64: b64,
        size: file.size,
        objectId: objectId,
      },
    });
  }
}
