import { SeatsComponent } from './seats/seats.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PassengerComponent } from './passenger/passenger.component';
import { RegistrationComponent } from './registration/registration.component';
import { ShowticketComponent } from './showticket/showticket.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminShowAllBusesComponent } from './admin-show-all-buses/admin-show-all-buses.component';
import { ShowRoutesComponent } from './show-routes/show-routes.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminScheduleComponent } from './admin-schedule/admin-schedule.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path:'register',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'admin' ,component:AdminComponent},
  {path:'searchResult',component:SearchResultComponent},
  {path:'seats', component:SeatsComponent},
  {path:'passenger',component:PassengerComponent},
  {path:'showticket',component:ShowticketComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'searchResult', component:SearchResultComponent},
  {path:'seats', component:SeatsComponent},
  {path:'admin-analytics',component:AdminDashboardComponent},
  {path:'admin-show-buses',component:AdminShowAllBusesComponent},
  {path:'admin-routes',component:ShowRoutesComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'admin-schedule',component:AdminScheduleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
