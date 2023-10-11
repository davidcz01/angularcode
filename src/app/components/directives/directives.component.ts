import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
})
export class DirectivesComponent implements OnInit {
  pageTitle: string = 'Example List';
  showList: boolean = false;
  items: Item[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.items = this.userService.getItems();
  }

  toggleList(): void {
    this.showList = !this.showList;
  }
}
