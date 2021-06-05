import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { User } from '../class/user';
interface Jwt {
  access_token : string,
  token_type:string,
  expires_in : number, 
  user_name: string
  email: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserLogged = true;
  @Output() usersignedin = new EventEmitter<User>()
  @Output() usersignedup = new EventEmitter<User>()
  @Output() usersloguot = new EventEmitter()
  APIAUTHURL= 'http://localhost:8000/api/auth/'
  constructor(private http: HttpClient) { }


  isUserLoggedIn() {
    this.isUserLogged = !!localStorage.getItem('token');
    return this.isUserLogged;
  }
  signIn(email: string, password: string){
    this.http.post<Jwt>(this.APIAUTHURL + 'login' , {email : email, password: password}).subscribe(
      (payload : Jwt) => {
        localStorage.setItem('token', payload.access_token);
        localStorage.setItem('user', JSON.stringify(payload));
        let user = new User()
        user.name =  payload.user_name;
        user.email = payload.email;
        this.usersignedin.emit(user);
        return true;
      },
      (error: HttpHeaderResponse) => {
          console.error(error)
      }
    )
  

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
    localStorage.removeItem('user');
    this.usersloguot.emit();
    this.isUserLogged = false;
  }
  getUser(){
    const data: Jwt =JSON.parse(localStorage.getItem('user')!);
    let user = new User()

    if(data){
      user.name = data.user_name
      user.email = data.email
    }
    return user;
  }

  getToken(){
    const data =localStorage.getItem('token');   
    return data;
  }

}
