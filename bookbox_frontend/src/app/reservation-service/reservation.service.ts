import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../Interface/reservation';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http : HttpClient) { }

  getAllReservation(): Observable<Reservation[]>{
    return this.http.get<Reservation[]>("http://localhost:8080/api/reservation");
  }
}
