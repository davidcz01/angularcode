export class User {
  userName: string;
  userId: number;
  userDate: string;

  constructor(item: User) {
    this.userName = item.userName;
    this.userId = item.userId;
    this.userDate = item.userDate;
  }
}
