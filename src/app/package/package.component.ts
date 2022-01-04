import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ContenidoPackage } from '../contenidoPackage';
import { CountrysPackage } from '../countrysPackage';
import { Destiny } from '../destiny';
import { Product } from '../product';
import { ClientesService } from '../Services/clientes.service';
import { PackageService } from '../Services/package.service';
import { getPackages, Package } from '../Services/packages';
import { Valija } from '../Valija';
@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.styl']
})
export class PackageComponent implements OnInit {
  id: string = '';
  nameCustomer: any;
  codeCustomer: string = '';
  selectedUser: any
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
  constructor(private packageService: PackageService, private router: Router, private clienteService: ClientesService) { }
  destinys: Destiny[] = [];
  valijas: Valija[] = [];
  contenido: ContenidoPackage[] = [];
  pais: CountrysPackage[] = [];
  packages: Package[] = [];
  rates: any[] = [];
  loading = true;
  error: any;
  usersList: any;
  filteredUsers: any;
  first = 0;
  rows = 10;
  selectedProducts3: any[] = [];
  private querySubscription: Subscription | undefined;
  getPackages: Observable<getPackages[]> | undefined;
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
    this.id = localStorage.getItem('id')!;
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
    this.gettingPackages()

    this.gettingUsers()
  }
  gettingPackages() {

    this.packageService.getPackages()
      .subscribe(
        response => {
          console.log(response)
          if (!response.errors) {
            this.packages = response.data.Packages
          } else {
            console.log(response.errors[0].message, 'danger')
          }
        });
  }
  gettingUsers() {
    this.clienteService.getClientes()
      .subscribe(
        response => {
          console.log(response)
          if (!response.errors) {
            this.usersList = response.data.getClientes
          } else {
            console.log(response.errors[0].message, 'danger')
          }
        });
  }
  selectedAutocompleteUser() {
    console.log(this.nameCustomer)
    this.codeCustomer = this.nameCustomer.last_name;
    console.log(this.codeCustomer)
  }
  filterUser(event: any) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < this.usersList.length; i++) {
      let user = this.usersList[i];

      if (user.first_name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(user);
      } else if (user.last_name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(user);
      }
    }
    console.log(filtered)
    this.filteredUsers = filtered;
  }
  handleValor() {

    const navigationExtras: NavigationExtras = { state: { list: this.selectedProducts3 } }
    this.router.navigate([`in/${this.id}/valija`], navigationExtras);
  }
  onSubmit() {
    const data = this.LoginForm!.value
    console.log(data)
    let body = {
      insertPackageInput: {
        country_org: data.countryOrigen.name,
        country_dest: data.Destino.name,
        wt: data.weight,
        size: {
          ig: parseInt(data.height),
          wd: parseInt(data.width),
          ht: parseInt(data.length)
        },
        recieved: data.marca,
        type: data.tipoValija.name,
        tracking: data.nameCustomer.id,
        recieve: data.model,
        desc: data.description,
        sender: data.proveedor
      }
    }
    console.log('body', body)
    this.packageService.create(body)
      .subscribe(
        response => {
          console.log(response);
        });
  }
}
