import { Component, OnInit } from '@angular/core';
import {CarsService} from "../../services/cars/cars.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

    carForm = new FormGroup({
      manufacturer: new FormControl(''),
      year: new FormControl(''),
      mileage: new FormControl(''),
      fuel: new FormControl(''),
      color: new FormControl(''),
      model: new FormControl(''),
      price: new FormControl(''),
      type: new FormControl(''),
      description: new FormControl('')
  });

  constructor(private carService: CarsService,
              private route: Router) { }

  ngOnInit() {}

  save() {
    const car = this.carForm.value;
    // this.carService.addCars(car);
    // this.route.navigateByUrl("/cars");
    this.carService.addCars(car).subscribe(() => {
      this.route.navigateByUrl('/cars');
    })
    this.carForm.reset();

  }
}
