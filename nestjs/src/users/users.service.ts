import { Injectable } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<UserEntity[]> {
    const users = await this.prisma.user.findMany();
    return users.map((user) => new UserEntity(user.id, user.login, 0));
  }
}
