import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-adminmain',
  templateUrl: './adminmain.component.html',
  styleUrls: ['./adminmain.component.scss'],
})
export class AdminmainComponent {
  constructor(public authService: AuthService) {}

  logOut() {
    this.authService.logout();
  }
}
