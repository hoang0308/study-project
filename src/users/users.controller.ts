import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Public } from 'src/auth/auth.constants';
import { IUser } from './model/users.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post()
  create(@Body() user: IUser): Promise<boolean> {
    return this.userService.createUser(user);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  getUser(@Param() id: number): Promise<IUser> {
    return this.userService.findUserById(id);
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  getAll(): Promise<IUser[]> {
    return this.userService.findAllUsers();
  }

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  update(@Param('id') id: number, @Body() user: IUser): Promise<boolean> {
    return this.userService.updateUser(id, user);
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  delete(@Param('id') id: number): Promise<boolean> {
    return this.userService.deleteUser(id);
  }
}
