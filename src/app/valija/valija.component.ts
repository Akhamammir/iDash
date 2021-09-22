import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Destiny } from '../destiny';
import { PackageService } from '../SERVICES/package.service';
import { ListPackage } from '../SERVICES/packages';

@Component({
  selector: 'app-valija',
  templateUrl: './valija.component.html',
  styleUrls: ['./valija.component.styl']
})
export class ValijaComponent implements OnInit {
  id: string = '';
  constructor(private AR: ActivatedRoute, private packageService: PackageService) { }
  destinys: Destiny[] = [];
  Destino: string = '';
  packages: ListPackage[] = [];

  ngOnInit(): void {
    this.destinys = [
      { name: 'Barcelona' },
      { name: 'Peninsula' }
    ];
    this.id = this.AR.snapshot.paramMap.get('id')!


  }

}
