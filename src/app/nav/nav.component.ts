import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isUserLogedIn = false;
  @Output() onNewUser = new EventEmitter()
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.isUserLogedIn = this.auth.isUserLoggedIn()
  }
  newUser (){
    this.onNewUser.emit();
  }
 
  logout(e){
    e.preventDefault();
    this.auth.loguot();
    this.router.navigate(['login'])
  }
}
