import { Component, OnInit } from '@angular/core';
import {Car} from "../../models/car";
import {CarsService} from "../../services/cars/cars.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  car: Car;
  constructor(private route: ActivatedRoute,
              private carService: CarsService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.car = this.carService.readCarById(id);
  }

}
