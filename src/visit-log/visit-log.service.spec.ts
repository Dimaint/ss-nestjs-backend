import { Test, TestingModule } from '@nestjs/testing';
import { VisitLogService } from './visit-log.service';

describe('VisitLogService', () => {
  let service: VisitLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VisitLogService],
    }).compile();

    service = module.get<VisitLogService>(VisitLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
