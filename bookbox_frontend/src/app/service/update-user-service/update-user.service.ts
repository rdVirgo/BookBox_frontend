import { Injectable } from '@angular/core';
import {UpdatedUser, User} from "../../Interface/user";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UpdateUserService {
  userToUpdate!:UpdatedUser;
  constructor(private router:Router) { }


  redirectToUpdatePageByUrl(url:string, user:UpdatedUser){
    this.userToUpdate = user;
    this.router.navigateByUrl(url);
  }

  getUserToUpdate():UpdatedUser{
    return this.userToUpdate;
  }

}
