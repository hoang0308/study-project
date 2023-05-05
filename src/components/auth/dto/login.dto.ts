import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'username', minLength: 4, maxLength: 255 })
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @MinLength(4)
  username: string;

  @ApiProperty({ example: 'password', minLength: 4, maxLength: 255 })
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @MinLength(4)
  password: string;
}
