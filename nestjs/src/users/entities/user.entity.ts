export class UserEntity {
  readonly id: string;
  readonly login: string;

  constructor(id: string, login: string) {
    this.id = id;
    this.login = login;
  }
}
