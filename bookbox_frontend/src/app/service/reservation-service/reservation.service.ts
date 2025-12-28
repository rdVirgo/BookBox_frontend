import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation, CreatedReservation, ReservationIdAndValue } from '../../Interface/reservation';
import { ReservationId } from '../../Interface/reservation-id';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http : HttpClient) { }

  getAllReservation(): Observable<Reservation[]>{
    return this.http.get<Reservation[]>("/api/reservation");
  }

  createReservation(createReservation:CreatedReservation): Observable<Reservation>{
    return this.http.post<Reservation>("/api/reservation", createReservation);
  }

  updateReservation(reservationIdAndValue:ReservationIdAndValue):Observable<Reservation>{
    return this.http.put<Reservation>("/api/reservation/id", reservationIdAndValue);
  }

  deleteReservation(id:ReservationId){
    return this.http.delete<void>(
      "/api/reservation/id",
      {
        body:id
      }

    );
  }

}
