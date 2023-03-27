import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import UsersEntity from './model/users.entity';
import { IUser } from './model/users.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly userResponsitory: Repository<UsersEntity>,
  ) { }

  async createUser(user: IUser): Promise<boolean> {
    try {
      await this.userResponsitory.save(user);
      return true;
    } catch (error) { }
    return false;
  }

  fillAllUsers(): Promise<IUser[]> {
    return this.userResponsitory.find();
  }

  async updateUser(id: number, user: IUser): Promise<boolean> {
    try {
      await this.userResponsitory.update(id, user);
      return true;
    } catch (error) { }
    return false;
  }

  async deleteUser(id: number): Promise<boolean> {
    try {
      await this.userResponsitory.delete(id);
      return true;
    } catch (error) { }
    return false;
  }
}
