import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule} from "@angular/material/card";
import {NgIf} from "@angular/common";
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-connexion-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, MatInputModule, MatButtonModule, NgIf, RouterLink],
  templateUrl: './connexion-form.component.html',
  styleUrl: './connexion-form.component.css'
})
export class ConnexionFormComponent {
 formGroup = new FormGroup({
   LoginName: new FormControl('', [Validators.required,Validators.maxLength(150)]),
   Password: new FormControl('',[Validators.required, Validators.minLength(8)])
 });
  wrongCredentials = false;

    login() {
      this.wrongCredentials= ! this.wrongCredentials;
    console.log(this.formGroup.value);
  }
}
