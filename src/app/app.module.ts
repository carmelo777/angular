import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { FormsModule} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavComponent } from './nav/nav.component'
import { Routes, RouterModule } from '@angular/router';
import { UserDataComponent } from './user-data/user-data.component';

export const routes: Routes = [
  {
    path:'users',
    pathMatch: 'full',
    component: UsersComponent
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
    component: UserDataComponent
  }

];


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailComponent,
    NavComponent,
    UserDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,    
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
