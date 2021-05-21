import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../class/user';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input('user-data') user : User;
  @Output('onDeleteUser') userDeleted = new EventEmitter();
  @Output() onSelectUser = new EventEmitter();
  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  deleteUser(){
    this.userDeleted.emit(this.user);
  }
  updateUser(){
    this.route.navigate(['users', this.user.id, 'edit'])
    this.onSelectUser.emit(this.user)
  }
  showUserDetail(){
    this.route.navigate(['users', this.user.id])
  }
}
