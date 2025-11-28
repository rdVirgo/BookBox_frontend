import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-connexion-form',
  standalone: true,
  imports: [ReactiveFormsModule,MatButtonModule,MatInputModule,MatButtonModule],
  templateUrl: './connexion-form.component.html',
  styleUrl: './connexion-form.component.css'
})
export class ConnexionFormComponent {
 formGroup = new FormGroup({
   NomLogin: new FormControl('', [Validators.required,Validators.maxLength(150)]),
   MotDePasse: new FormControl('',[Validators.required]),
 });
    onSubmit() {
    console.log(this.formGroup.value);
  }
}
