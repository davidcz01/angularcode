import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent {
  inputDate = new Date(2000, 0, 1);
  toggle = true;
  inputdec = 100;
  combinedPipe = new Date(2001, 11, 1);
  toggle2 = true;
  textformat = new FormControl('');

  get format() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }

  get format2() {
    return this.toggle2 ? 'shortDate' : 'fullDate';
  }

  toggleFormat() {
    this.toggle = !this.toggle;
  }

  toggleFormat2() {
    this.toggle2 = !this.toggle2;
  }
}
