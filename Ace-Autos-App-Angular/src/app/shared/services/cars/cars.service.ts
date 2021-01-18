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

/**  Components aren't allowed to fetch or save data directly. They should focus on presenting data
 * and delegate data access to a service.
 * Services are a great way to share information among components that don't know each other.
 * */

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  /** The carService gets car data with HTTP requests */
  /** The carService is refactored to load cars from a web API*/
  url = environment.apiURL + 'car';
  cars: Car[]; /** An cars array, used to store multiple values.*/
  id = 1;
  constructor(private http: HttpClient, private authenService: AuthenticationService) {
  }
  /** The car service gets information from the backend, retrieving the necessary information needed.
   * GET cars from the server.
   */
  getCars(): Observable<Car[]> {
      httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenService.getToken());
      const url1 = 'https://localhost:44360/api/' + 'car';
    /**  Pipe: An function that accepts an Observable, transforming input values to output values for display in a view.
     *  Map: A function used to access the values, presenting them as an observable. Map is used to transform values of an observable.
     *  Using pipe and map together, allows us to chain multiple operators together.
     *  HTTPClient is utilized as it can return HTTP method calls.
     */
      return this.http.get<Car[]>(url1, httpOptions).pipe(
      map((rest: any[]) => {
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

  async updateCar(car: Car): Promise<Car> {
       await this.http.put<Car>(this.url + '/' + car.id, car).subscribe(
        data => {
          console.log(data);
          return data;
        },
        error => console.log('oops', error)
      );
       return null;
      // const carToUpdate = this.cars.find(ca => car.id === ca.id);
      // const index = this.cars.indexOf(carToUpdate);
      // this.cars[index] = car;
  }

  readCarById(id: number): Observable<Car> {
      // return this.cars.find(ca => ca.id === id);
      return this.http.get<Car>(this.url + '/' + id);
  }
  /** The car service gets information from the backend, retrieving the necessary information needed.
   * DELETEcar calls HTTPClient.delete
   */
  deleteCar(id: number): Observable<Car> {
    this.http.delete<Car>(this.url + '/' + id).subscribe(
      data => {
        console.log(data);
        return data;
      },
      error => console.log('oops', error)
    );
    return null;
  }


}
