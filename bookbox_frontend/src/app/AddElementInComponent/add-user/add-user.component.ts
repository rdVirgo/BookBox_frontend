import { Component } from '@angular/core';
import { InscriptionFormComponent } from '../../Component/inscription-form/inscription-form.component';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [
    InscriptionFormComponent
  ],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {

}
