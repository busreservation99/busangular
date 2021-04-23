import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

import { AdminComponent } from './admin/admin.component';

import { PassengerComponent } from './passenger/passenger.component';
import { ShowticketComponent } from './showticket/showticket.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { SearchResultComponent } from './search-result/search-result.component';
import { SeatsComponent } from './seats/seats.component';
import { TempComponent } from './temp/temp.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistrationComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    SearchResultComponent,
    SeatsComponent,
    PassengerComponent,
    ShowticketComponent,
    DashboardComponent,
    SearchResultComponent,
    SeatsComponent,
    TempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
