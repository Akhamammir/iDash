import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ContenidoPackage } from '../contenidoPackage';
import { CountrysPackage } from '../countrysPackage';
import { Destiny } from '../destiny';
import { Product } from '../product';
import { PackageService } from '../SERVICES/package.service';
import { Package } from '../SERVICES/packages';
import { Valija } from '../Valija';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.styl']
})
export class PackageComponent implements OnInit {
  id: string = '';
  nameCustomer: string = '';
  codeCustomer: string = '';
  Destino: string = '';
  guiaReferencia: string = '';
  proveedor: string = '';
  tipoValija: string = '';
  amount: string = '';
  description: string = '';
  tipoContenido: string = '';
  countryOrigen: string = '';
  marca: string = '';
  model: string = '';
  valor: string = '';
  weight: string = '';
  currentWeight: string = '';
  length: string = '';
  width: string = '';
  height: string = '';
  totalWeight: string = '';
  LoginForm: FormGroup | undefined;
  products: Product[] = [];
  constructor(private AR: ActivatedRoute, private packageService: PackageService) { }
  destinys: Destiny[] = [];
  valijas: Valija[] = [];
  contenido: ContenidoPackage[] = [];
  pais: CountrysPackage[] = [];
  packages: Package[] = [];


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
    this.LoginForm = new FormGroup({
      nameCustomer: new FormControl(this.nameCustomer, [Validators.required]),
      codeCustomer: new FormControl(this.codeCustomer, [Validators.required]),
      Destino: new FormControl(this.Destino, [Validators.required]),
      guiaReferencia: new FormControl(this.guiaReferencia, [Validators.required]),
      proveedor: new FormControl(this.proveedor, [Validators.required]),
      tipoValija: new FormControl(this.tipoValija, [Validators.required]),
      amount: new FormControl(this.amount, [Validators.required]),
      description: new FormControl(this.description, [Validators.required]),
      tipoContenido: new FormControl(this.tipoContenido, [Validators.required]),
      countryOrigen: new FormControl(this.countryOrigen, [Validators.required]),
      marca: new FormControl(this.marca, [Validators.required]),
      model: new FormControl(this.model, [Validators.required]),
      valor: new FormControl(this.valor, [Validators.required]),
      weight: new FormControl(this.weight, [Validators.required]),
      currentWeight: new FormControl(this.currentWeight, [Validators.required]),
      length: new FormControl(this.length, [Validators.required]),
      width: new FormControl(this.length, [Validators.required]),
      height: new FormControl(this.length, [Validators.required]),
      totalWeight: new FormControl(this.length, [Validators.required]),
    })
    this.retrievePackages()
  }
  retrievePackages(): void {

    this.packageService.getAll('asdasd')
      .subscribe(
        data => {
          console.log(data)
          // let arr = [];
          // for (let i in data) {
          //   data[i]['impuesto'] = 0;
          //   data[i]['tramiteAduanal'] = 0.00;
          //   data[i]['manejoEnvio'] = 0.00;
          //   data[i]['seguro'] = 0.00;
          //   data[i]['total'] = 0.00;
          //   arr.push(data[i])
          // }
          // console.log(arr)
          // this.packages = arr;
        },
        error => {
          console.log(error);
        });
  }
  onSubmit() {
    const data = this.LoginForm!.value
    console.log(data)
    this.packageService.create(data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
  registerPackage(): void {

    let data = this.packages

    console.log(data)
    this.packageService.createlist(data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
}
