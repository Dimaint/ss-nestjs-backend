import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VisitLogService } from './visit-log.service';
import { CreateVisitLogDto } from './dto/create-visit-log.dto';
import { UpdateVisitLogDto } from './dto/update-visit-log.dto';
import { Public } from '../auth.decorator';

@Controller('visit-log')
export class VisitLogController {
  constructor(private readonly visitLogService: VisitLogService) {}

  @Post()
  create(@Body() createVisitLogDto: CreateVisitLogDto) {
    console.log('createVisitLogDto controller');
    return this.visitLogService.create(createVisitLogDto);
  }
  @Public()
  @Get('/group/:groupId')
  findAllByGroupId(@Param('groupId') groupId: string) {
    return this.visitLogService.findAllByGroupId(+groupId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.visitLogService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVisitLogDto: UpdateVisitLogDto) {
    return this.visitLogService.update(+id, updateVisitLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.visitLogService.remove(+id);
  }
}
