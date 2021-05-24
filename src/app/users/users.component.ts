import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { User } from '../class/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  title : string = 'Users';
  users : Array<User>;
  @Output() updateUser = new EventEmitter <User>()
  constructor(private service : UserService) {
  }
  
  ngOnInit(): void {
    this.service.getUsers().subscribe(
      res => this.users = res['data']
    );
  }
  onDeleteUser(user: User){
    this.service.deleteUser(user).subscribe(
      res => {
        this.service.getUsers().subscribe(  res => this.users = res.data)
      },
      err => {
        console.log(err)
      }
    )
  }
  onSelectUser(user: User) {
    this.updateUser.emit(Object.assign({}, user))
  }

}
