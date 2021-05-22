import { Component, OnInit } from '@angular/core';
//import { City } from '../City';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.styl']
})
export class PricesComponent implements OnInit {


  selectedValuesFeactures: string[] = [];

 constructor() { }

  ngOnInit(): void {

  }

}
