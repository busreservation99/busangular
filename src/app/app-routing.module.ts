<<<<<<< HEAD
import { Component, NgModule } from '@angular/core';
=======
import { SeatsComponent } from './seats/seats.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { NgModule } from '@angular/core';
>>>>>>> 80e984fd58d422dd3939f472797f88be119fd7f8
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { AdminComponent } from './admin/admin.component';
=======
import { DashboardComponent } from './dashboard/dashboard.component';
>>>>>>> 6a755cba45aad5c2c5dbafaf61de70ac1c494dd9
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PassengerComponent } from './passenger/passenger.component';
import { RegistrationComponent } from './registration/registration.component';
import { ShowticketComponent } from './showticket/showticket.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path:'register',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
<<<<<<< HEAD
<<<<<<< HEAD
  {path:'admin' ,component:AdminComponent}
 
=======
  {path:'searchResult', component:SearchResultComponent},
  {path:'seats', component:SeatsComponent}
>>>>>>> 80e984fd58d422dd3939f472797f88be119fd7f8
=======
  {path:'passenger',component:PassengerComponent},
  {path:'showticket',component:ShowticketComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'searchResult', component:SearchResultComponent},
  {path:'seats', component:SeatsComponent}

>>>>>>> 6a755cba45aad5c2c5dbafaf61de70ac1c494dd9
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
