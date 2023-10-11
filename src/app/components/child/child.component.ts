import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input()
  successful: boolean = false;
  messageBack: string = 'Successfully received Input';

  @Output() messageData: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {}

  sendMessage() {
    this.messageData.emit(this.messageBack);
    // console.log('Click');
  }
}
