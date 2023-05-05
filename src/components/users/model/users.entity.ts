import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../users.enum';
import {
  IsEnum,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

@Entity({ name: 'users' })
class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @MinLength(4)
  username: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @MinLength(4)
  password: string;

  @Column({ type: 'varchar', default: Role.Users })
  @IsNotEmpty()
  @IsEnum(Role)
  role: Role;
}

export default UsersEntity;
