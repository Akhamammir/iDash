import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Destiny } from '../destiny';

@Component({
  selector: 'app-valija',
  templateUrl: './valija.component.html',
  styleUrls: ['./valija.component.styl']
})
export class ValijaComponent implements OnInit {
  id: string = '';
  constructor(private AR: ActivatedRoute) { }
  destinys: Destiny[] = [];
  Destino: string = '';
  ngOnInit(): void {
    this.destinys = [
      { name: 'Barcelona' },
      { name: 'Peninsula' }
    ];
    this.id = this.AR.snapshot.paramMap.get('id')!
  }

}
