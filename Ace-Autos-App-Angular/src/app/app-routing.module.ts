import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarsComponent} from "./cars/cars.component";
import {ContactComponent} from "./contact/contact.component";
import {LoginComponent} from "./login/login.component";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: 'cars', component: CarsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: "home", pathMatch: 'full' }
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
