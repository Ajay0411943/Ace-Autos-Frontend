import {Component, NgModule} from '@angular/core';
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
import {UserComponent} from './user/user.component';
import {AboutComponent} from './about/about.component';
import {GalleryComponent} from './gallery/gallery.component';
import {TeamComponent} from './team/team.component';

const routes: Routes = [
  { path: 'cars/:id', component: CarDetailsComponent, canActivate: [AuthGuard] },
  { path: 'car-update/:id', component: CarUpdateComponent, canActivate: [AuthGuard] },
  { path: 'cars', component: CarsComponent, canActivate: [AuthGuard]},
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'table', component: TableComponent, canActivate:[AuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'add-car', component: AddCarComponent, canActivate:[AuthGuard] },
  { path: '', redirectTo: 'cars', pathMatch: 'full' },
  { path: 'user', component: UserComponent, canActivate:[AuthGuard] },
  { path: 'table', component: TableComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'add-car', component: AddCarComponent, canActivate: [AuthGuard]},
  { path: 'about', component: AboutComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'team', component: TeamComponent }
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
