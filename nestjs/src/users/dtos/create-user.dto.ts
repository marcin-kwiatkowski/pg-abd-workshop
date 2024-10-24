export class CreateUserDTO {
  readonly login: string;

  constructor(login: string) {
    this.login = login;
  }
}
