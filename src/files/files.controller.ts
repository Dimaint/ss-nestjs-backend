import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Query,
} from '@nestjs/common';
import { FilesService } from './files.service';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { Public } from '../auth.decorator';
import { FileInterceptor } from '@nestjs/platform-express/multer';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', { dest: './uploads' }))
  uploadSingle(@UploadedFile() file) {
    console.log(file);
  }

  @Get()
  findAll() {
    return this.filesService.findAll();
  }
  @Public()
  @Get(':id')
  findOne(@Param('id') id: string, @Query('fileType') fileType = 'avatar') {
    console.log('get file');
    return this.filesService.findOne(+id, fileType);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filesService.remove(+id);
  }

  @Public()
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Query('objectId') objectId: string,
    @Query('fileType') fileType: string,
  ) {
    // console.log(file.buffer.toString('base64'));
    const b64 = file.buffer.toString('base64');
    return this.filesService.saveFile(+objectId, file, b64, fileType);
  }
}
