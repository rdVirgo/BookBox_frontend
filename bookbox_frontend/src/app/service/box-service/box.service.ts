import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Box, CreatedBox } from '../../Interface/box';

@Injectable({
  providedIn: 'root'
})
export class BoxService {



  constructor(private http : HttpClient) { }

  getAllBoxes():Observable<Box[]>{
    return this.http.get<Box[]>("/api/box");
  }

  createBox(box:CreatedBox):Observable<Box>{
    return this.http.post<Box>("/api/box",box);
  }

  updateBox(id:number, box:CreatedBox):Observable<Box>{
    return this.http.put<Box>(`/api/box/${id}`, box);
  }

  deleteBox(id:number){
    return this.http.delete<void>(`/api/box/${id}`);
  }

}
