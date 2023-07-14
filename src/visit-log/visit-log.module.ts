import { Module } from '@nestjs/common';
import { VisitLogService } from './visit-log.service';
import { VisitLogController } from './visit-log.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [VisitLogController],
  providers: [VisitLogService],
  imports: [PrismaModule],
})
export class VisitLogModule {}
