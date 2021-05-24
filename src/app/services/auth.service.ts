import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isUserLogged = true
  constructor() { }

  isUserLoggedIn(){
    return false;
  } 
  signIn(email:String, password: String){
    return this.isUserLogged;
  }
  signUp(username: String, email:String, password: String){
    return false;
  }
  loguot(){
    this.isUserLogged = false;
  }
}
