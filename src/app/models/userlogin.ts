export class UserLogin {
  userName: string;
  email: string;
  password: string;

  constructor(item: UserLogin) {
    this.userName = item.userName;
    this.email = item.email;
    this.password = item.password;
  }
}
