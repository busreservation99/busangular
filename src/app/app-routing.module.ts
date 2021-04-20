<<<<<<< HEAD
import { Component, NgModule } from '@angular/core';
=======
import { SeatsComponent } from './seats/seats.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { NgModule } from '@angular/core';
>>>>>>> 80e984fd58d422dd3939f472797f88be119fd7f8
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path:'register',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
<<<<<<< HEAD
  {path:'admin' ,component:AdminComponent}
 
=======
  {path:'searchResult', component:SearchResultComponent},
  {path:'seats', component:SeatsComponent}
>>>>>>> 80e984fd58d422dd3939f472797f88be119fd7f8
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
