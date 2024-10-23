import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserEntity } from './entities/user.entity';
import { UserDTO } from './dtos/user.dto';
import { CreateUserDTO } from './dtos/create-user.dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/users')
  async getAll(): Promise<UserDTO[]> {
    const users: UserEntity[] = await this.usersService.getAll();
    return users.map<UserDTO>((entity) => UserDTO.fromEntity(entity));
  }

  @Post('/users')
  async createUser(@Body() createUser: CreateUserDTO): Promise<UserDTO> {
    const user = await this.usersService.createUser(createUser.login);
    return UserDTO.fromEntity(user);
  }
}
