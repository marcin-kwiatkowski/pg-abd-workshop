import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserEntity } from './entities/user.entity';
import { UserDTO } from './dtos/user.dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/users')
  getAll(): UserDTO[] {
    const users: UserEntity[] = this.usersService.getAll();
    return users.map<UserDTO>((entity) => UserDTO.fromEntity(entity));
  }
}
