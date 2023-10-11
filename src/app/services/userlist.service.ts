import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserList {
  getUsers() {
    return [
      {
        userName: 'JohnDoe1',
        userId: 1001,
        userDate: '2000-01-01',
      },
      {
        userName: 'JaneDoe2',
        userId: 1982,
        userDate: '2012-05-02',
      },
      {
        userName: 'TestUser1',
        userId: 1234,
        userDate: '2023-10-06',
      },
      {
        userName: 'TestUser1000',
        userId: 2512,
        userDate: '2017-05-10',
      },
    ];
  }
}
