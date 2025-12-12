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

    const boxFullName = this.reservationFormComponent.getAllInputValues().get("place")?.value;
    const userFullName = this.reservationFormComponent.getAllInputValues().get("user")?.value;
    const reservedQuantity = this.reservationFormComponent.getAllInputValues().get("reservedQuantity")?.value;

    alert("Reservation : " + boxFullName + " <-> " + userFullName + " : " + reservedQuantity);

    this.reservationFormComponent.resetForm();

  }

  ngOnInit(): void{

  }

  ngAfterViewInit(): void{

  }

}
