import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import { User } from '../class/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Output() onNewUser = new EventEmitter();
  showmenu = false;
  isCollapsed = false;
  isUserLOggedIn = false;
  username: string;
  constructor(private auth : AuthService,private router: Router) {
    auth.usersignedin.subscribe(
      (user:User) => {
        this.username = user.name;
        this.isUserLOggedIn = true;
      }
    );

    auth.usersloguot.subscribe(
      () => {
        this.username ="";
        this.isUserLOggedIn = false;
      }
    );

    auth.usersignedup.subscribe(
      (user:User) => {
        this.username = user.name;
        this.isUserLOggedIn = true;
      }
    );


  }

  ngOnInit() {
    this.isUserLOggedIn =  this.auth.isUserLoggedIn();
  }

  newUser() {
    this.onNewUser.emit();
  }
  toggleaMenu(){
    this.showmenu = !this.showmenu;
  }
  logout(e) {
    e.preventDefault();
    this.auth.logout();
    this.router.navigate(['login']);
  }
  signIn(e) {
    e.preventDefault();

    this.router.navigate(['login']);
  }
  signUp(e) {
    e.preventDefault();
    this.auth.logout();
    this.router.navigate(['signup']);
  }
}
