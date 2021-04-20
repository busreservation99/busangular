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
<<<<<<< HEAD
<<<<<<< HEAD
import { AdminComponent } from './admin/admin.component';
=======
=======
import { PassengerComponent } from './passenger/passenger.component';
import { ShowticketComponent } from './showticket/showticket.component';
import { DashboardComponent } from './dashboard/dashboard.component';
>>>>>>> 6a755cba45aad5c2c5dbafaf61de70ac1c494dd9
import { SearchResultComponent } from './search-result/search-result.component';
import { SeatsComponent } from './seats/seats.component';
>>>>>>> 80e984fd58d422dd3939f472797f88be119fd7f8


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistrationComponent,
    HomeComponent,
    LoginComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    AdminComponent
=======
    SearchResultComponent,
    SeatsComponent
>>>>>>> 80e984fd58d422dd3939f472797f88be119fd7f8
=======
    PassengerComponent,
    ShowticketComponent,
    DashboardComponent,
    SearchResultComponent,
    SeatsComponent

>>>>>>> 6a755cba45aad5c2c5dbafaf61de70ac1c494dd9
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
