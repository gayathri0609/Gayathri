import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CreateDoctorComponent, DoctorListComponent, HeaderNavComponent, LeftNavComponent, LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
