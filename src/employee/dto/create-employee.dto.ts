import { ApiProperty } from '@nestjs/swagger';
import { Rank, User } from '@prisma/client';

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
  birthday: Date;

  @ApiProperty({ required: false })
  userId: number | null;
}
