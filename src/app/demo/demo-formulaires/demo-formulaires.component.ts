import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RegisterFormModel} from "../../models/register.form.model";

@Component({
  selector: 'app-demo-formulaires',
  templateUrl: './demo-formulaires.component.html',
  styleUrl: './demo-formulaires.component.scss'
})
export class DemoFormulairesComponent {

  registerForm: FormGroup;

  constructor(private readonly _fb: FormBuilder) {
    this.registerForm = _fb.group({
      name: [null, [Validators.required, Validators.maxLength(50)]],
      breed: [null, [Validators.required]],
      birthdate: [null, [Validators.required]],
      ownerName: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  onSubmit(){
    this.registerForm.markAllAsTouched();
    if (this.registerForm.invalid) {
      console.log('Form invalid');
      return;
    }
    let value: RegisterFormModel = this.registerForm.value;



  }

}
