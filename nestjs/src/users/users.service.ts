import { Injectable } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { PrismaService } from '../prisma.service';
import { v4 } from 'uuid';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<UserEntity[]> {
    const users = await this.prisma.user.findMany();
    return users.map((user) => new UserEntity(user.id, user.login));
  }

  async createUser(login: string): Promise<UserEntity> {
    const id = v4();
    const user = await this.prisma.user.create({
      data: {
        id: id,
        login: login,
      },
    });
    return new UserEntity(user.id, user.login);
  }
}
