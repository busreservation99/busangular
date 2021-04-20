import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PassengerComponent } from './passenger/passenger.component';
import { RegistrationComponent } from './registration/registration.component';
import { ShowticketComponent } from './showticket/showticket.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path:'register',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'passenger',component:PassengerComponent},
  {path:'showticket',component:ShowticketComponent},
  {path:'dashboard',component:DashboardComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
