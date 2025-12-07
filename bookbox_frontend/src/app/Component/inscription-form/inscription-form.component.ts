import { Component } from '@angular/core';

import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule, ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-inscription-form',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatError,
    MatFormField,
    MatInput,
    MatLabel,
    NgIf,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './inscription-form.component.html',
  styleUrl: './inscription-form.component.css'
})
export class InscriptionFormComponent {

  passwordMatchValidator: ValidatorFn = ( control: AbstractControl
): ValidationErrors | null => {
  const form = control as FormGroup;
    const pass = form.get('Password')?.value;
    const confirm = form.get('Password_Confirmation')?.value;
    return pass === confirm ? null : { passwordMismatch: true };

  };
  formGroup = new FormGroup({
    Name : new FormControl('', Validators.required),
    Surname : new FormControl('', Validators.required),
    LoginName: new FormControl('', [Validators.required,Validators.maxLength(150)]),
    Password: new FormControl('',[Validators.required, Validators.minLength(8)]),
    Password_Confirmation : new FormControl('',[Validators.required]),

  },
  { validators: this.passwordMatchValidator });

  wrongCredentials = false;


  register() {
      if (this.formGroup.invalid) {
        this.formGroup.markAllAsTouched();
        return;
      }
      console.log(this.formGroup.value);
    }
}
