import { Injectable } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  getAll(): UserEntity[] {
    const user1 = new UserEntity(
      'db5ff9e3-7178-452d-9452-c9a54ca1f313',
      'user1',
      10,
    );

    const user2 = new UserEntity(
      '157f861e-f43c-4d36-89d9-f9935dc712b4',
      'user2',
      17,
    );

    const user3 = new UserEntity(
      'eb14c20b-9209-44d8-9837-9161e122eac0',
      'user3',
      17,
    );

    return [user1, user2, user3];
  }
}
