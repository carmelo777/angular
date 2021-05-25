import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Output() onNewUser = new EventEmitter();
  showmenu = false;
  isCollapsed = false;
  isUserLOggedIn = false
  constructor(private auth : AuthService,private router: Router) {
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
}
