import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma.service';
import { UserEntity } from './entities/user.entity';
import { CreateUserDTO } from './dtos/create-user.dto';

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
      // Arrange
      const result: UserEntity[] = [];
      jest
        .spyOn(usersService, 'getAll')
        .mockImplementation(() => Promise.resolve(result));

      // Act
      const response = await usersController.getAll();

      // Assert
      expect(response).toEqual(result);
    });

    it('should return proper user id', async () => {
      // Arrange
      const userId = 'Some-ID';
      const result: UserEntity[] = [new UserEntity(userId, '')];
      jest
        .spyOn(usersService, 'getAll')
        .mockImplementation(() => Promise.resolve(result));

      // Act
      const response = await usersController.getAll();

      // Assert
      expect(response).toHaveLength(1);
      expect(response[0].id).toEqual(userId);
    });
  });

  describe('createUser', () => {
    it('should return id of a created user', async () => {
      // Arrange
      const userId = 'ID';
      const user = new UserEntity(userId, '');

      jest
        .spyOn(usersService, 'createUser')
        .mockImplementation(() => Promise.resolve(user));

      // Act
      const payload = new CreateUserDTO('');
      const createdUserDTO = await usersController.createUser(payload);

      // Assert
      expect(createdUserDTO).toBeDefined();
      expect(createdUserDTO.id).toEqual(userId);
    });
  });
});
