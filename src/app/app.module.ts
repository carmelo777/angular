import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavComponent } from './nav/nav.component'

import { HttpClientModule } from '@angular/common/http';

import { UserDataComponent } from './user-data/user-data.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { RoutingModule } from './routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailComponent,
    NavComponent,
    UserDataComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    RoutingModule      
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
