import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../class/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {
  public User: User
  constructor( private routeActive: ActivatedRoute, private userService: UserService, private route:Router) { }

  ngOnInit(): void {
    this.User = new User();
    this.routeActive.paramMap.subscribe(p => {
       this.userService.getUser(+p.get('id')!).subscribe(res => this.User = res.data)
    });
  }
  backToUsers(){
    this.route.navigate(['users']);
  }

}
