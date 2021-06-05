import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../class/user';
interface UsersResponse {
  data:User[];
  message:string;
  success:boolean;
};
interface UserResponse {
  data:User;
  message:string;
  success:boolean;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  users : Array<User> =  [];
  private  APIURL= 'http://localhost:8000/users'
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<UsersResponse>(this.APIURL);
  }
  deleteUser(user: User){
   return this.http.delete<UserResponse>(this.APIURL + '/' + user.id)
  }

  updateUser(user: User){
   return this.http.patch<UserResponse>(this.APIURL + '/' + user.id, user);

  }

  createUser(user: User){
    //user.id = this.users.length+1
    return this.http.post<UserResponse>(this.APIURL, user);

  }
  
  getUser(id : number){
    return this.http.get<UserResponse>(this.APIURL + '/' + id);
  }
  
}
