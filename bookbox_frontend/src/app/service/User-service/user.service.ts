import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User, CreatedUser, UpdatedUser} from "../../Interface/user";




@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>("/api/users");
  }

  createUser(user:CreatedUser):Observable<User>{
    return this.http.post<User>("/api/users",user);
  }
  deleteUser(iduser: number){
    return this.http.delete<void>(`/api/users/${iduser}`);
  }
  updateUser(iduser :number ,user : UpdatedUser){
    return this.http.put<User>(`/api/users/${iduser}`,user);
  }
}
