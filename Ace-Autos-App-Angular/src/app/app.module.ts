import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './shared/cars/cars.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JwtInterceptor} from './shared/guards/interceptor';
import {CarUpdateComponent} from './shared/cars/car-update/car-update.component';
import {CarDetailsComponent} from './shared/cars/car-details/car-details.component';
import {AddCarComponent} from './shared/cars/add-car/add-car.component';
import { TableComponent } from './table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatTableModule} from '@angular/material/table';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import {ProgressbarModule} from 'ngx-bootstrap/progressbar';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TeamComponent } from './team/team.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarsComponent,
    LoginComponent,
    ContactComponent,
    CarDetailsComponent,
    AddCarComponent,
    CarUpdateComponent,
    TableComponent,
    AboutComponent,
    GalleryComponent,
    TeamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    FormsModule,
    MatTableModule,
    ButtonsModule,
    ProgressbarModule.forRoot()
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
