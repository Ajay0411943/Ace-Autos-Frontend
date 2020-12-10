import { Injectable } from '@angular/core';
import {Car} from "../../models/car";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  cars: Car[];
  id = 1;
  constructor() { this.cars = [{id: this.id++, color: 'Red', fuel: 'Diesel', manufacturer: 'Ferrari', mileage: 25,
    model: 'F8 Spider', price: 3000000, type: 'sport', year: 1994},
    {id: this.id++, color: 'Yellow', fuel: 'Diesel', manufacturer: 'Lamborghini', mileage: 25,
      model: 'Urus', price: 2500000, type: 'sport', year: 2019}
  ]; }
  getCars(): Car[] {
      return this.cars;
  }

  addCars(car: Car) {
      car.id = this.id++;
      this.cars.push(car);
  }

  updateCar(car: Car) {
      const carToUpdate = this.cars.find(ca=> car.id === ca.id);
      const index = this.cars.indexOf(carToUpdate);
      this.cars[index] = car;
  }

  readCarById(id: number) {
      return this.cars.find(ca => ca.id === id);
  }

  deleteCar(id: number) {
      this.cars = this.cars.filter(ca => ca.id !== id);
  }


}
