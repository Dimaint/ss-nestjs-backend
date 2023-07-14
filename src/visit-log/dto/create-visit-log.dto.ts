import { ApiProperty } from '@nestjs/swagger';
import { IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateVisitLogDto {
  @ApiProperty({ required: true })
  @Type(() => Date)
  @IsDate()
  date: Date;

  @ApiProperty()
  clientId: number;

  @ApiProperty({ required: true })
  is_visited: boolean;

  @ApiProperty({ required: true })
  is_reason: boolean;

  @ApiProperty({ required: true })
  description: string;
}
