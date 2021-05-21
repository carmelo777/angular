import { Injectable } from '@angular/core';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 users : Array<User> =  [
  {
    id:1,
    name: 'AAA',
    lastname : 'AAA',
    fiscalcode:'AAAA',
    email:'AAAA',
    province: 'AAA',
    phone: 'AAA',
    age:44
  },
  {
    id:2,
    name: 'BBBBB',
    lastname : 'BBBB',
    email : 'BBBBB',
    fiscalcode:'BBBBB',
    province: 'BBBB',
    phone: 'BBBBB',
    age:44
  },
  {
    id:3,
    name: 'CCCCC',
    lastname : 'CCCCC',
    email : 'CCCCC',
    fiscalcode:'CCCCCC',
    province: 'CCCCCC',
    phone: 'CCCCCC',
    age:44
  },
  {
    id:4,
    name: 'DDDDD',
    lastname : 'DDDDD',
    email : 'DDDDD',
    fiscalcode:'DDDDD',
    province: 'DDDDD',
    phone: 'DDDDD',
    age:44
  }
]
  constructor() { }

  getUsers() {
    return this.users;
  }
  deleteUser(user: User){
    let index = this.users.indexOf(user)
    if(index>=0)
      this.users.splice(index, 1);
  }

  updateUser(user: User){
    const idx = this.users.findIndex((v) => v.id === user.id)
    if(idx !== -1){
      this.users[idx] = user;
    }

  }

  createUser(user: User){
    user.id = this.users.length+1
    this.users.push(user);

  }
  
  getUser(id : number): User{
    return this.users.find(user => user.id === id)!;
  }
  
}
