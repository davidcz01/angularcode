import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  result: number = 0;

  onIncrement() {
    this.result += 1;
  }

  onDecrement() {
    this.result -= 1;
  }
}
