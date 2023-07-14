import { Test, TestingModule } from '@nestjs/testing';
import { VisitLogController } from './visit-log.controller';
import { VisitLogService } from './visit-log.service';

describe('VisitLogController', () => {
  let controller: VisitLogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VisitLogController],
      providers: [VisitLogService],
    }).compile();

    controller = module.get<VisitLogController>(VisitLogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
