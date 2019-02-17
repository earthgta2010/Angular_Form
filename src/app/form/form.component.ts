import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formGroup: FormGroup;
  @Output() change = new EventEmitter();
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      age: [0, [Validators.min(0),Validators.max(99)]],
      email: ['', [Validators.required, Validators.email]],

    })
  }

  // EmailValidator(control: AbstractControl){
  //   const value: string = control.value;
  //   if(value && value.includes('@')){
  //     return null;
  //   }
  //   return{
  //     email: true
  //   }
  // }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      //console.log(form.valid, form.invalid);
      //console.log((<FormControl>form.get('firstName')).errors);
      const { firstName, lastName, email, age } = form.value;
      //console.log(firstName, lastName, email, age);
      const user = new User(firstName, lastName, email, age);
      this.change.emit(user);
      //console.log(user);
    } else {
      ['firstName',
        'lastName',
        'age',
        'email'].forEach((key: string)=>{
          //console.log(form.get(key).errors)
          form.get(key).markAsTouched();
        })
    }

  }

}
