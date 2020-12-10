import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './shared/cars/cars.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
<<<<<<< Updated upstream
import { CarDetailsComponent } from './shared/cars/car-details/car-details.component';
import { AddCarComponent } from './shared/cars/add-car/add-car.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CarUpdateComponent } from './shared/cars/car-update/car-update.component';
import { FormsModule } from '@angular/forms';

=======
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {JwtInterceptor} from './shared/guards/interceptor';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarsComponent,
    LoginComponent,
    ContactComponent,
    CarDetailsComponent,
    AddCarComponent,
    CarUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< Updated upstream
    ReactiveFormsModule,
    FormsModule
=======
    HttpClientModule,
    ReactiveFormsModule
>>>>>>> Stashed changes
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
