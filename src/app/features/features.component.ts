import { Component, OnInit } from '@angular/core';
//import { City } from '../City';
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.styl']
})

export class FeaturesComponent implements OnInit {
  destiny: string = '';
  selectedValues: string[] = [];
  selectedValuesFeactures: string[] = [];
  checked: boolean = false;
  cities: any[];

  selectedCity: any | undefined;

  constructor() {
    this.cities = [
      { name: 'Acapulco, GRO', code: 'GRO' },
      { name: 'Aguaprieta, SON.', code: 'SON' },
      { name: 'Aguascalientes, AGS', code: 'AGS' },
    ];
  }

  ngOnInit(): void {
  }

}
