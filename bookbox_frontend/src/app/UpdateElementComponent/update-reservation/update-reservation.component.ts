import { OnInit, AfterViewInit, Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { ReservationFormComponent } from '../../GlobalForms/reservation-form/reservation-form.component';
import { UpdateReservationService } from '../../update-reservation-service/update-reservation.service';
import { Reservation } from '../../Interface/reservation';

@Component({
  selector: 'app-update-reservation',
  standalone: true,
  imports: [
    ReservationFormComponent,
    MatButtonModule
  ],
  templateUrl: './update-reservation.component.html',
  styleUrl: './update-reservation.component.css'
})
export class UpdateReservationComponent implements OnInit, AfterViewInit{

  reservationToUpdate!: Reservation;


  constructor(
    private updateReservationService: UpdateReservationService
  ){}


  updateReservation(){
    alert("Reservation to update nb : " + this.reservationToUpdate.reservationNb);
  }

  ngOnInit(){
    this.reservationToUpdate = this.updateReservationService.getReservationToUpdate();
  }

  ngAfterViewInit(){

  }

}
