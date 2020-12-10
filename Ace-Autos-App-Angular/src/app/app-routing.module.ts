import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< Updated upstream
import {CarsComponent} from "./shared/cars/cars.component";
import {ContactComponent} from "./contact/contact.component";
import {LoginComponent} from "./login/login.component";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {CarDetailsComponent} from "./shared/cars/car-details/car-details.component";
import {AddCarComponent} from "./shared/cars/add-car/add-car.component";
import {CarUpdateComponent} from "./shared/cars/car-update/car-update.component";
=======
import {CarsComponent} from './cars/cars.component';
import {ContactComponent} from './contact/contact.component';
import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
>>>>>>> Stashed changes

const routes: Routes = [
  { path: 'cars/:id', component: CarDetailsComponent },
  { path: 'car-update/:id', component: CarUpdateComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
<<<<<<< Updated upstream
  { path: 'add-car', component: AddCarComponent },
  { path: '', redirectTo: "home", pathMatch: 'full' }
=======
  { path: '', redirectTo: 'home', pathMatch: 'full' }
>>>>>>> Stashed changes
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
]
})
export class AppRoutingModule { }
