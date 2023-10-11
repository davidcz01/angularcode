import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss'],
})
export class ReactiveformComponent {
  name = new FormControl('');

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    passWord: ['', [Validators.required, Validators.minLength(8)]],
    phoneNo: this.fb.array([]),
  });

  constructor(private fb: FormBuilder) {}

  get phoneNo() {
    return this.profileForm.controls['phoneNo'] as FormArray;
  }

  addNumber() {
    const phoneNoForm = this.fb.group({
      number: [
        '',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
        ],
      ],
    });

    this.phoneNo.push(phoneNoForm);
  }

  deleteNumber(numberIndex: number) {
    this.phoneNo.removeAt(numberIndex);
  }

  updateName() {
    this.name.setValue('');
  }

  onSubmit() {
    console.info(this.profileForm.value);
  }
}
