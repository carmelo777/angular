import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { User } from '../class/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  faCoffee = faCoffee
  private userCopy :User;
  private _user: User;
  @Input() set user(user :User) {
    this._user = user;
    this.userCopy = Object.assign({}, user);
  }
  get user () {
    return this._user;
  }
  constructor(private userService: UserService, private activateRouter: ActivatedRoute, private route: Router) { 
  
  }

  ngOnInit(): void {
    this.user= new User();

    this.activateRouter.paramMap.subscribe(
      (pararms) => {
        if(pararms.get('id')) {
         this.userService.getUser(+pararms.get('id')!).subscribe(
           res =>  this.user = res.data
         );
        }
      });
  }
  updateUser(){
    this.userService.updateUser(this.user).subscribe(
      res => {
        alert(res.message);
        if(res.success){
          this.route.navigate(['users'])
        } 
      }
    )
  }
  createUser(){
    this.userService.createUser(this.user).subscribe(
      res => {
        alert(res.message);
        if(res.success){
          this.route.navigate(['users'])
        } 
      }
    )
  }

  saveUser(){
    if(this.user.id>0){
      this.updateUser();
    } else {
     this.createUser();
    }
  }

  resetForm(form){
    if (this.user.id === 0) {
      this.user = new User()
    } else {
      this.user = this.userCopy;
    }
  }

  backToUser(){
    this.route.navigate(['users']);
  }

}
