import { Component, OnInit } from '@angular/core';
import {Car} from "../models/car";
import {CarsService} from "../services/cars/cars.service";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Car[];
  constructor(private carService: CarsService) { }
  ngOnInit(): void {
    //this.cars = this.carService.getCars();
    this.refresh();
  }

  delete(id: number) {
    this.carService.deleteCar(id);
    //this.cars = this.carService.getCars();
    //this.refresh();
  }

  refresh() {
    console.log('Refreshing');
    this.carService.getCars()
      .subscribe(listOfCars => {
        this.cars = listOfCars;
        console.log(listOfCars);
      }, error => console.log(error.message));
  }
}
