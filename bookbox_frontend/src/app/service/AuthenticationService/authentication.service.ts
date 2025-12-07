import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly JWT_TOKEN = 'JWT_TOKEN'
  private loggedUser?: String ;
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false)

  private http= inject(HttpClient);
  constructor() { }

  login(user:{
    username : string , password : string
  }): Observable<any>{
    return this.http.post('/api/login',user).pipe(
      tap(tokens=>this.doLoginUser(user.username,tokens))
    )
  }
  private doLoginUser(username : string , tokens : any){
    this.loggedUser=username;
    this.storeJwtToken(tokens.jwt);
    this.isAuthenticatedSubject=tokens;
  }
  private storeJwtToken(jwt : string){
    localStorage.setItem(this.JWT_TOKEN,jwt);
  }
  logout(){
    localStorage.removeItem(this.JWT_TOKEN);
    this.isAuthenticatedSubject.next(false);
  }
}
