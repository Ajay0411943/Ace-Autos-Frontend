import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CarsService} from "../../services/cars/cars.service";
import {FormControl, FormGroup} from "@angular/forms";
import {valueReferenceToExpression} from "@angular/compiler-cli/src/ngtsc/annotations/src/util";

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {
  id: number;

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
  constructor(private route: ActivatedRoute,
              private carService: CarsService,
              private router: Router) { }

  ngOnInit() {
    // this.id = +this.route.snapshot.paramMap.get('id');
    // const car = this.carService.readCarById(this.id);
    // this.carForm.patchValue(  {
    //   manufacturer: car.manufacturer,
    //   year: car.year,
    //   mileage: car.mileage,
    //   fuel: car.fuel,
    //   color: car.color,
    //   model: car.model,
    //   price: car.price,
    //   type: car.type,
    // });
    this.id = +this.route.snapshot.paramMap.get('id');
    this.carService.readCarById(this.id).subscribe(carFromRest => {
      this.carForm.patchValue({
        manufacturer: carFromRest.manufacturer,
        year: carFromRest.year,
        mileage: carFromRest.mileage,
        fuel: carFromRest.fuel,
        color: carFromRest.color,
        model: carFromRest.model,
        price: carFromRest.price,
        type: carFromRest.type,
        description: carFromRest.description
      });
    });

  }


  save(){
    const car = this.carForm.value;
    car.id = this.id;
    // this.carService.updateCar(car);
    this.carService.updateCar(car).subscribe(carUpdated => {this.router.navigateByUrl('/cars');
    });
    // this.carForm.reset();
    // this.router.navigateByUrl("/cars");
  }
}
