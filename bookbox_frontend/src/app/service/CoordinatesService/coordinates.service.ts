import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Coordinates} from "../../Interface/coordinates";

@Injectable({
  providedIn: 'root'
})
export class CoordinatesService {

  constructor(private http: HttpClient) {
  }

  getAllCoordinates(): Observable<Coordinates[]> {
    return this.http.get<Coordinates[]>("/api/coordinates");
  }

}
