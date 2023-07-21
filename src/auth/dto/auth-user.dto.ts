import { ApiProperty } from '@nestjs/swagger';
// import { userRole } from '@prisma/client';

export class AuthDto {
  @ApiProperty({ required: true })
  username: string;

  @ApiProperty({ required: true })
  password: string;
}

export class RegistrationDto {
  @ApiProperty({ required: true })
  username: string;

  @ApiProperty({ required: true })
  password: string;

  @ApiProperty({ required: true })
  confirmPassword: string;

  @ApiProperty({ required: true, default: 'USER' })
  role: [];
}
