import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private router: Router, private auth: AuthService) { }

   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
     if(this.auth.isUserLoggedIn()){
       return true
     }
      this.router.navigate(['login']);
      return false;
   }
}
