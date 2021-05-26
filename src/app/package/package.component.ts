import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContenidoPackage } from '../contenidoPackage';
import { CountrysPackage } from '../countrysPackage';
import { Destiny } from '../destiny';
import { Product } from '../product';
import { ProductService } from '../productservice';
import { Valija } from '../Valija';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.styl']
})
export class PackageComponent implements OnInit {
  id: string = '';

  products: Product[]= [];

  constructor(private AR: ActivatedRoute, private productService: ProductService) { }
  destinys: Destiny[] = [];
  valijas: Valija[] = [];
  contenido: ContenidoPackage[] = [];
  pais: CountrysPackage[] = [];
  Destino: string = '';
  ngOnInit(): void {
    this.destinys = [
      { name: 'Barcelona' },
      { name: 'Peninsula' }
    ];
    this.valijas = [
      { name: 'A' },
      { name: 'B' }
    ];
    this.contenido = [
      { name: 'Alimentos/Suplementos/Vitaminas' },
      { name: 'Articulo de piel natural' }
    ];
    this.pais = [
      { name: 'Estados Unidos' },
      { name: 'Mexico' }
    ];
    this.id = this.AR.snapshot.paramMap.get('id')!

    this.productService.getProductsSmall().then(data => this.products = data);

  }

}
