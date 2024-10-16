export class UserEntity {
  readonly id: string;
  readonly login: string;
  readonly age: number;

  constructor(id: string, login: string, age: number) {
    this.id = id;
    this.login = login;
    this.age = age;
  }
}
