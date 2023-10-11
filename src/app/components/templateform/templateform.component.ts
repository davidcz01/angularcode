import { Component } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.scss'],
})
export class TemplateformComponent {
  user = {
    Name: '',
    Email: '',
    Pass: '',
  };

  formValid: boolean = false;
  hidden: boolean = true;

  onSubmitTempForm() {
    this.hidden = !this.hidden;
  }
}
