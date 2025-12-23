import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User, CreatedUser} from "../../Interface/user";




@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>("http://localhost:8080/api/users");
  }

  createUser(user:CreatedUser):Observable<User>{
    return this.http.post<User>("http://localhost:8080/api/users",user);
  }
  deleteUser(iduser: number){
    return this.http.delete<void>(`http://localhost:8080/api/users/${iduser}`);
  }
}
