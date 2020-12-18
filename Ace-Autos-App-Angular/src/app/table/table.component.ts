import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})


export class TableComponent {
  title = 'Car Table';
  searchText;
  cars = [
    {id: 1, manufacturer: 'Audi', model: 'R8', type: 'Sports', year: 2015, fuel: 'Gas', mileage: 1000, color: 'Red', price: 100000},
    {id: 2, manufacturer: 'BMW', model: 'M8', type: 'Sports', year: 1, fuel: 'Gas', mileage: 1000, color: 'Black', price: 100000},
    {id: 3, manufacturer: 'Mercedes', model: 'S class', type: 'Luxury', year: 4, fuel: 'Gas', mileage: 1000, color: 'White', price: 100000},
    {id: 4, manufacturer: 'Porsche', model: 'Camaro', type: 'Sports', year: 1, fuel: 'Gas', mileage: 1000, color: 'Yellow', price: 100000},
    {id: 5, manufacturer: 'Toyota', model: 'Supra', type: 'Sports', year: 6, fuel: 'Gas', mileage: 1000, color: 'Blue', price: 100000},
    {id: 6, manufacturer: 'Volkswagen', model: 'Golf', type: 'Sports', year: 9, fuel: 'Gas', mileage: 1000, color: 'Green', price: 100000},
    {id: 7, manufacturer: 'Honda', model: 'Civic', type: 'Sports', year: 15, fuel: 'Gas', mileage: 1000, color: 'Brown', price: 100000},
    {id: 8, manufacturer: 'Suzuki', model: 'Swift', type: 'Sports', year: 6, fuel: 'Gas', mileage: 1000, color: 'Purple', price: 100000},
    {id: 9, manufacturer: 'Nissan', model: 'Skyline', type: 'Sports', year: 10, fuel: 'Gas', mileage: 1000, color: 'Silver', price: 100000},
  ];
}
