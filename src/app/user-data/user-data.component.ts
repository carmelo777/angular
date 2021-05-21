import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../class/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {
  private user: User
  constructor( private routeActive: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.routeActive.params.subscribe(p => this.user = this.userService.getUser(+p.id))
  }

}
