import { ApiProperty } from '@nestjs/swagger';
import { Rank, User } from '@prisma/client';
import { IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateEmployeeDto {
  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty({ required: false })
  middle_name: string;

  @ApiProperty({ required: true, default: 'Trainer' })
  rank: Rank;

  @ApiProperty({ required: false })
  phone: string;

  @ApiProperty({ required: false })
  @Type(() => Date)
  @IsDate()
  birthday: Date;

  @ApiProperty({ required: false })
  userId: number | null;
}
