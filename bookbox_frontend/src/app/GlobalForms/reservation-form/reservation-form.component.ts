import { OnInit, Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators} from '@angular/forms'


@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})
export class ReservationFormComponent implements OnInit{

  reservations = new FormGroup({
   place: new FormControl<string | null >(null, [Validators.required]),
   user:new FormControl<string | null >(null),
   reservedQuantity:new FormControl<number | null >(null, [Validators.required]),

 });

  constructor(){}

  ngOnInit(): void{

  }

}
