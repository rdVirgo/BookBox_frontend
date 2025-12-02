import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Box, CreatedBox } from '../Interface/box';

@Injectable({
  providedIn: 'root'
})
export class BoxService {



  constructor(private http : HttpClient) { }

  getAllBoxes():Observable<Box[]>{
    return this.http.get<Box[]>("http://localhost:8080/api/box");
  }

  createBox(box:CreatedBox):Observable<Box>{
    return this.http.post<Box>("http://localhost:8080/api/box",box);
  }

}
