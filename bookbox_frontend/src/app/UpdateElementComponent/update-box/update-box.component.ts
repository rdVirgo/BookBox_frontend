import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { BoxFormComponent } from '../../GlobalForms/box-form/box-form.component';

@Component({
  selector: 'app-update-box',
  standalone: true,
  imports: [
    BoxFormComponent,
    MatButtonModule
  ],
  templateUrl: './update-box.component.html',
  styleUrl: './update-box.component.css'
})
export class UpdateBoxComponent {
  updateBox(){

  }
}
