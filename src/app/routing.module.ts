import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserDataComponent } from './user-data/user-data.component';
import { UsersComponent } from './users/users.component';
import {RouteGuardService} from './route-guard.service';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {
    path:'users',
    pathMatch: 'full',
    component: UsersComponent,
   
  },
  {
    path:'',
    pathMatch: 'full',
    redirectTo:'users'
  },
  {
    path:'users/new',
    component: UserDetailComponent
  },
  {
    path:'users/:id/edit',
    component: UserDetailComponent
  },
  {
    path:'users/:id',
    component: UserDataComponent,
    canActivate : [RouteGuardService]
  },
  {
    path:'login',
    component: LoginComponent,
   
  }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [RouteGuardService]
})
export class RoutingModule { }