import { UsersService } from './users.service';
import { PrismaService } from '../prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../app.module';

describe('UsersService', () => {
  let usersService: UsersService;

  const mockPrismaService = {
    user: {
      findMany: jest.fn().mockResolvedValue([]),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(PrismaService)
      .useValue(mockPrismaService)
      .compile();

    usersService = module.get<UsersService>(UsersService);
  });

  describe('getAll', () => {
    it('should return empty list when prisma findMany returns an empty list', async () => {
      // Arrange
      mockPrismaService.user.findMany = jest.fn().mockReturnValueOnce([]);

      // Act
      const users = await usersService.getAll();

      // Assert
      expect(users).toHaveLength(0);
    });

    it('should return user having proper id', async () => {
      // Arrange
      const userId = 'c56b7d18-1d32-4b8a-9d76-3f91cd2df6cd';
      mockPrismaService.user.findMany = jest
        .fn()
        .mockReturnValueOnce([{ id: userId }]);

      // Act
      const users = await usersService.getAll();

      // Assert
      expect(users).toHaveLength(1);
      expect(users[0].id).toEqual(userId);
    });
  });
});
