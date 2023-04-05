import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../users.enum';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

@Entity('user')
class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'username', minLength: 4, maxLength: 255 })
  @Column({ unique: true })
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @MinLength(4)
  username: string;

  @ApiProperty({ example: 'password', minLength: 4, maxLength: 255 })
  @Column()
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @MinLength(4)
  password: string;

  @Column()
  @IsNotEmpty()
  @IsEnum(Role)
  role: Role;
}

export default UsersEntity;
