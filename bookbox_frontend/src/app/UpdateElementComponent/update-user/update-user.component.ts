import { Component } from '@angular/core';
import {BoxFormComponent} from "../../GlobalForms/box-form/box-form.component";
import {MatButton} from "@angular/material/button";
import {UserFormComponent} from "../../GlobalForms/user-form/user-form.component";

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [
    BoxFormComponent,
    MatButton,
    UserFormComponent
  ],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent {

  updateUser() {

  }
}
