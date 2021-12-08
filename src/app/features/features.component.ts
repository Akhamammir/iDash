import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { City } from '../city';
import { Phone } from '../phone';
import { PackageService } from '../Services/package.service';
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
  tipos: Phone[] = [];
  paises: City[] = [];
  cities: City[];
  id: string = '';
  selectedCity: any | undefined;
  LoginForm: FormGroup | undefined;
  constructor(private AR: ActivatedRoute, private packageService: PackageService, private router: Router) {
    this.cities = [
      { name: 'Acapulco, GRO', code: 'GRO' },
      { name: 'Aguaprieta, SON.', code: 'SON' },
      { name: 'Aguascalientes, AGS', code: 'AGS' },
    ];
    this.tipos = [
      { name: 'Paquete', },
      { name: 'Sobre', }
    ];
    this.paises = [
      { name: "Aguascalientes", code: "AG" },
      { name: "Baja California", code: "BC" },
      { name: "Baja California sur", code: "BS" },
      { name: "Campeche", code: "CM" },
      { name: "Chihuahua", code: "CH" },
      { name: "Chiapas", code: "CS" },
      { name: "Coahuila", code: "CO" },
      { name: "Colima", code: "CL" },
      { name: "Durango", code: "DG" },
      { name: "Guerrero", code: "GR" },
      { name: "Guanajuato", code: "GT" },
      { name: "Hidalgo", code: "HG" },
      { name: "Jalisco", code: "JA" },
      { name: "Distrito Federal", code: "DF" },
      { name: "Estado  de Mexico", code: "MX" },
      { name: "Michoacan", code: "MI" },
      { name: "Morelos", code: "MO" },
      { name: "Nayarit", code: "NA" },
      { name: "Nuevo Leon", code: "NL" },
      { name: "Oaxaca", code: "OA" },
      { name: "Puebla", code: "PU" },
      { name: "Queretaro", code: "QT" },
      { name: "Quintana Roo", code: "QR" },
      { name: "San Luis Potosi", code: "SL" },
      { name: "Sinaloa", code: "SI" },
      { name: "Sonora", code: "SO" },
      { name: "Tabasco", code: "TB" },
      { name: "Tamaulipas", code: "TM" },
      { name: "Tlaxcala", code: "TL" },
      { name: "Veracruz", code: "VE" },
      { name: "Yucatan", code: "YU" },
      { name: "Zacatecas", code: "ZA" },

    ];
  }

  ngOnInit(): void {
    this.id = this.AR.snapshot.paramMap.get('id')!

    this.LoginForm = new FormGroup({
      typeSend: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      postalCodeOrg: new FormControl('', Validators.required),
      postalCodeDest: new FormControl('', Validators.required),
      typePackage: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
      weight: new FormControl('', Validators.required),
      width: new FormControl('', Validators.required),
      length: new FormControl('', Validators.required),
      height: new FormControl('', Validators.required),
    })
  }
  onSubmit() {
    const data = this.LoginForm!.value
    console.log(data)
    let body = {
      getQuotationInput: {
        shipper: {
          postalCode: data.postalCodeOrg,
          countryCode: 'MX',
        },
        recipient: {
          postalCode: data.postalCodeDest,
          countryCode: 'MX',
        },
        dimensions: {
          length: parseInt(data.height),
          width: parseInt(data.width),
          height: parseInt(data.length),
          units: 'CM'
        },
        weight: {
          value: parseInt(data.height),
          units: 'KG'
        }
      }
    }
    console.log('body', body)
    this.packageService.getQuotation(body)
      .subscribe(({ data, loading }) => {
        console.log(data);
        console.log(loading);
        if (data) {
          const navigationExtras: NavigationExtras = { state: { data: data } }
          this.router.navigate(['in/prices', this.id], navigationExtras);
        }
      },
        error => {
          console.log(error);
        });
  }

}
