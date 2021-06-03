import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../class/user';
interface Jwt {
  access_token : string,
  token_type:string,
  expires_in : number
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserLogged = true;
  @Output() usersignedin = new EventEmitter<User>()
  @Output() usersignedup = new EventEmitter<User>()
  @Output() usersloguot = new EventEmitter()
  private  APIAUTHURL= 'http://localhost:8000/api/auth/'
  constructor(private http: HttpClient) { }


  isUserLoggedIn() {
    this.isUserLogged = !!localStorage.getItem('token');
    return this.isUserLogged;
  }
  signIn(email: string, password: string){
    this.http.post(this.APIAUTHURL + 'login' , {email : email, password: password}).subscribe(
      (payload : any) => {

      },
      (error : any) => {
          console.error(error)
      }
    )
    localStorage.setItem('token', email);
    let user = new User()
    user.name =  "test";
    user.email = email;
    this.usersignedin.emit(user);
    return true;

  }
  signUp(username:string, email: string, password: string){
    localStorage.setItem('token', email);
    let user = new User()
    user.name =  username;
    user.email = email;
    this.usersignedup.emit(user);
    return true;

  }
  logout() {
    localStorage.removeItem('token');
    this.usersloguot.emit();
    this.isUserLogged = false;
  }
}
