import { UserEntity } from '../entities/user.entity';

export class UserDTO {
  readonly id: string;
  readonly login: string;

  constructor(id: string, login: string) {
    this.id = id;
    this.login = login;
  }

  public static fromEntity(user: UserEntity): UserDTO {
    return new UserDTO(user.id, user.login);
  }
}
