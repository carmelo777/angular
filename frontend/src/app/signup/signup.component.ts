import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private auth:AuthService, private router: Router) { }

  ngOnInit(): void {}

  signIn(form : NgForm) {
    let result = this.auth.signUp(form.value.name, form.value.email, form.value.password)
    if(result) {
      this.router.navigate(['users'])
    }
  }
  
}
