import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from '../City';
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
  cities: City[];
  id: string = '';
  selectedCity: City | undefined;

  constructor(private AR: ActivatedRoute) {
    this.cities = [
      { name: 'Acapulco, GRO', code: 'GRO' },
      { name: 'Aguaprieta, SON.', code: 'SON' },
      { name: 'Aguascalientes, AGS', code: 'AGS' },
    ];
  }

  ngOnInit(): void {
    this.id = this.AR.snapshot.paramMap.get('id')!
  }


}
