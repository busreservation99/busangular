import { NgModule } from '@angular/core';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TempComponent } from './temp/temp.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminShowAllBusesComponent } from './admin-show-all-buses/admin-show-all-buses.component';
import { ShowRoutesComponent } from './show-routes/show-routes.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentConfirmationComponent } from './payment-confirmation/payment-confirmation.component';
import { QRCodeModule } from 'angularx-qrcode';
import { QrcodeComponent } from './qrcode/qrcode.component';


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
    TempComponent,
    AdminDashboardComponent,
    AdminShowAllBusesComponent,
    ShowRoutesComponent,
    PaymentComponent,
    PaymentConfirmationComponent,
    QrcodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
