import { Injectable } from '@angular/core';
import {Car} from '../../models/car';
import {environment} from '../../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {AuthenticationService} from '../authentication.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  url = environment.apiURL + 'car';
  cars: Car[];
  id = 1;
  constructor(private http: HttpClient, private authenService: AuthenticationService) {
  //   this.cars = [{id: this.id++, color: 'Red', fuel: 'Diesel', manufacturer: 'Ferrari', mileage: 25,
  //   model: 'F8 Spider', price: 3000000, type: 'sport', year: 1994},
  //   {id: this.id++, color: 'Yellow', fuel: 'Diesel', manufacturer: 'Lamborghini', mileage: 25,
  //     model: 'Urus', price: 2500000, type: 'sport', year: 2019}
  // ];
  }
  getCars(): Observable<Car[]> {
      // return this.cars;
      httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenService.getToken());
      // return this.http.get<Car[]>(this.url);
      console.log('Fish');
      const url1 = 'https://localhost:44360/api/' + 'car';
      return this.http.get<Car[]>(url1, httpOptions).pipe(
      map((rest: any[]) => {
        console.log('Google');
        const data = rest.map(obj => ({
          id: obj.id,
          manufacturer: obj.manufacturer,
          year: obj.year,
          mileage: obj.mileage,
          fuel: obj.fuel,
          color: obj.color,
          model: obj.model,
          price: obj.price,
          type: obj.type,
          description: obj.description
        }));
        return data;
      })
    );
  }

  addCars(car: Car): Observable<Car>{
      // car.id = this.id++;
      // this.cars.push(car);
      return this.http.post<Car>(this.url, car);
  }

  updateCar(car: Car): Observable<Car> {
      return this.http.put<Car>(this.url + car.id, car);
      // const carToUpdate = this.cars.find(ca => car.id === ca.id);
      // const index = this.cars.indexOf(carToUpdate);
      // this.cars[index] = car;
  }

  readCarById(id: number): Observable<Car> {
      // return this.cars.find(ca => ca.id === id);
      return this.http.get<Car>(this.url + '/' + id);
  }

  deleteCar(id: number): Observable<Car> {
      // this.cars = this.cars.filter(ca => ca.id !== id);
      return this.http.delete<Car>(this.url + '/' + id);
  }


}
