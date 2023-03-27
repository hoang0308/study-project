import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import UserEntity from './model/user.entity';
import { IUser } from './model/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userResponsitory: Repository<UserEntity>,
  ) {}

  createUser(user: IUser): Promise<IUser> {
    return this.userResponsitory.save(user);
  }
}
