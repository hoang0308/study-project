import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { IUser } from './model/users.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) { }

  @Post()
  create(@Body() user: IUser): Promise<boolean> {
    return this.userService.createUser(user);
  }

  @Get()
  getAll(): Promise<IUser[]> {
    return this.userService.fillAllUsers();
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() user: IUser): Promise<boolean> {
    return this.userService.updateUser(id, user);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<boolean> {
    return this.userService.deleteUser(id);
  }
}
