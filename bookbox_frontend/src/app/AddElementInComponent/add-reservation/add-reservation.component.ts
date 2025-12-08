import { AfterViewInit, ViewChild, OnInit, Component } from '@angular/core';
import { ReservationFormComponent } from '../../GlobalForms/reservation-form/reservation-form.component';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-add-reservation',
  standalone: true,
  imports: [
    MatButtonModule,
    ReservationFormComponent
  ],
  templateUrl: './add-reservation.component.html',
  styleUrl: './add-reservation.component.css'
})
export class AddReservationComponent implements OnInit, AfterViewInit{

  @ViewChild(ReservationFormComponent)
  reservationFormComponent!:ReservationFormComponent;

  createReservation(){

  }

  ngOnInit(): void{

  }

  ngAfterViewInit(): void{

  }

}
