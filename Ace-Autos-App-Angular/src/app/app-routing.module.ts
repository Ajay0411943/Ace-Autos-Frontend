import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactComponent} from './contact/contact.component';
import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CarDetailsComponent} from './shared/cars/car-details/car-details.component';
import {CarUpdateComponent} from './shared/cars/car-update/car-update.component';
import {CarsComponent} from './shared/cars/cars.component';
import {AuthGuard} from './shared/guards/auth.guard';
import {TableComponent} from './table/table.component';
import {AddCarComponent} from './shared/cars/add-car/add-car.component';

const routes: Routes = [
  { path: 'cars/:id', component: CarDetailsComponent },
  { path: 'car-update/:id', component: CarUpdateComponent },
  { path: 'cars', component: CarsComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'table', component: TableComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'add-car', component: AddCarComponent},
  { path: '', redirectTo: 'cars', pathMatch: 'full' }
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
