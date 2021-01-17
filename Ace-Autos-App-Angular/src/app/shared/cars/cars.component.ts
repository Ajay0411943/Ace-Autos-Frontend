import { Component, OnInit } from '@angular/core';
import {Car} from '../models/car';
import {CarsService} from '../services/cars/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Car[]; /* Type safety */
  constructor(private carService: CarsService) { }
  ngOnInit(): void {
    // this.cars = this.carService.getCars();
    this.refresh();
  }

  /**
   * In here, for deleting a car, the service is called.
   */
  delete(id: number): any {
    console.log(id);
    this.carService.deleteCar(id);
    this.refresh();
    location.reload();
    /**
     * Last two lines of code are put in place to retrieve list of cars, after deletion, and reloading the view.
     */

  }

  /**
   * Subscribe is used to obtain or generate values.
   */
  refresh(): any {
    this.carService.getCars()
      .subscribe(listOfCars => {
        this.cars = listOfCars;
        console.log(listOfCars);
      }, error => console.log(error.message));
  }
}
