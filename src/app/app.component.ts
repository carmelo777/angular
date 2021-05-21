import { Component } from '@angular/core';
import { User } from './class/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showForm: boolean = false
  userSelected:User = new User() ;

  updateUser(user:User){
    this.showForm = true;
    this.userSelected = user;
  }

  newUser(){
    this.userSelected = new User();
    this.showForm = true
  }
}
