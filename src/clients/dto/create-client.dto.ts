import { ApiProperty } from '@nestjs/swagger';
import { clientType } from '@prisma/client';
import { IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateClientDto {
  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty({ required: false })
  middle_name: string;

  @ApiProperty({ required: true, default: 'Trainer' })
  clientType: clientType;

  @ApiProperty({ required: false })
  phone: string;

  @ApiProperty({ required: false })
  @Type(() => Date)
  @IsDate()
  birthday: Date;

  @ApiProperty({ required: false })
  userId: number | null;

  @ApiProperty({ required: false })
  groupId: number | null;
}
