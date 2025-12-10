import { ChangeDetectionStrategy, OnInit, Component } from '@angular/core';
import { CommonModule ,NgForOf, NgIf } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators} from '@angular/forms';
import { BoxService } from '../../box-service/box.service';
import { Box } from '../../Interface/box';



@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})
export class ReservationFormComponent implements OnInit{

  boxList!: Box[];

  reservations = new FormGroup({
   place: new FormControl<string | null >(null, [Validators.required]),
   user:new FormControl<string | null >(null),
   reservedQuantity:new FormControl<number | null >(null, [Validators.required]),

 });

  constructor(
    private boxService:BoxService
  ){

  }

  getAllInputValues():any{
    return this.reservations;
  }

  resetForm(){
    this.reservations.reset();
  }

  getAllBoxes(){
    this.boxService.getAllBoxes().subscribe({
      next : rest => {
        this.boxList = rest;
      },
      error : err => {
        console.log(err);
      }
    });

  }

  ngOnInit(): void{
    this.boxList = [];
    this.getAllBoxes();
  }

}
