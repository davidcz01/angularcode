import { Component, OnInit } from '@angular/core';
import { User } from '../../models/userlist';
import { UserList } from '../../services/userlist.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss'],
})
export class UserlistComponent implements OnInit {
  users: User[] = [];
  hidden: boolean = true;
  constructor(private userList: UserList) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  toggleUserlist(): void {
    this.hidden = !this.hidden;
  }

  fetchUsers(): void {
    this.users = this.userList.getUsers();
  }
}
