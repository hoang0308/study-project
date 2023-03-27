import { Body, Controller, Post } from '@nestjs/common';
import { IUser } from './model/user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() user: IUser): Promise<IUser> {
    console.log(user);
    return this.userService.createUser(user);
  }
}
