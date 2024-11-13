import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma.service';
import { UserEntity } from './entities/user.entity';

describe('UsersController', () => {
  let usersController: UsersController;
  let usersService: UsersService;
  let prismaService: PrismaService;

  beforeEach(() => {
    prismaService = new PrismaService();
    usersService = new UsersService(prismaService);
    usersController = new UsersController(usersService);
  });

  describe('getAll', () => {
    it('should return empty response when service returns an empty list', async () => {
      const result: UserEntity[] = [];
      jest
        .spyOn(usersService, 'getAll')
        .mockImplementation(() => Promise.resolve(result));

      const response = await usersController.getAll();
      expect(response).toEqual(result);
    });

    it('should return proper user id', async () => {
      const userId = 'Some-ID';
      const result: UserEntity[] = [new UserEntity(userId, '')];
      jest
        .spyOn(usersService, 'getAll')
        .mockImplementation(() => Promise.resolve(result));

      const response = await usersController.getAll();
      expect(response).toHaveLength(1);
      expect(response[0].id).toEqual(userId);
    });
  });

  // describe('createUser', () => {
  //   it('should return id of a created user', async () => {
  //     const userId = 'ID';
  //     const user = new UserEntity(userId, '', 0);
  //
  //     jest
  //       .spyOn(usersService, 'createUser')
  //       .mockImplementation(() => Promise.resolve(user));
  //
  //     const payload = new CreateUserDTO('', '');
  //     const createdUserDTO = await usersController.createUser(payload);
  //     expect(createdUserDTO).toBeDefined();
  //     expect(createdUserDTO.id).toEqual(userId);
  //   });
  // });
});
