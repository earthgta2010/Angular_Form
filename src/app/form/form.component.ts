import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formGroup: FormGroup;
  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      age: [22],
    })
  }

  onSubmit(form: FormGroup){
    console.log(form);
    const {firstName, lastName, email, age} = form.value;
    console.log(firstName, lastName, email, age);
    const user = new User(firstName, lastName, email, age);
    console.log(user)
  }

}
