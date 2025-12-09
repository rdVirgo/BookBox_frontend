import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {NgIf} from "@angular/common";
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';


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
  constructor(private http: HttpClient) {}

    login() {
      if (this.formGroup.invalid) {
        this.formGroup.markAllAsTouched();
        return;
      }
      const credentials = {
        username: this.formGroup.value.LoginName,
        password: this.formGroup.value.Password
      };
      this.http.post('/api/auth/login',credentials).subscribe(
        (res) => {
          this.wrongCredentials=false;
          console.log("successful login");
        },
        (err) => {
          console.error("login failed",err);
          this.wrongCredentials=true;
        }
      )
    }
}
