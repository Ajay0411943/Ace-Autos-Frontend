import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './shared/cars/cars.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { CarDetailsComponent } from './shared/cars/car-details/car-details.component';
import { AddCarComponent } from './shared/cars/add-car/add-car.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CarUpdateComponent } from './shared/cars/car-update/car-update.component';
import { FormsModule } from '@angular/forms';


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
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
