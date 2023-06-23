import { ApiProperty } from '@nestjs/swagger';

export class CreateGroupDto {
  @ApiProperty()
  name: string;
  @ApiProperty({ required: false })
  scheduleId: number | null;
}
