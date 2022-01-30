import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { City } from '../city';
import { Phone } from '../phone';
import { HelpersService } from '../Services/helpers.service';
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
  selectedCity: any | undefined;
  LoginForm: FormGroup | undefined;
  constructor(private AR: ActivatedRoute, private packageService: PackageService, private router: Router, private helperService: HelpersService) {
    this.cities = [
      { name: 'Acapulco, GRO', code: 'GRO' },
      { name: 'Aguaprieta, SON.', code: 'SON' },
      { name: 'Aguascalientes, AGS', code: 'AGS' },
    ];
    this.tipos = [
      { name: 'Paquete', },
      { name: 'Sobre', }
    ];
    // this.helperService.getPais()
    // .subscribe(({ data }) => {
    //   this.paises = data.getCatPais
    //   console.log(data);
    // });
  }

  ngOnInit(): void {
    console.log(this.cities);
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
      input: {
        shipper: {
          postalCode: data.postalCodeOrg,
          countryCode: "MX",
          address1: "TEST ORIGIN ADDRES 1",
          address2: "TEST ORIGIN ADDRES 2",
          cellPhone: "7731175188",
          city: "CDMX",
          contactName: "JOSE BENITEZ ORIGIN",
          corporateName: "TEST CROP ORIGIN",
          state: "DF"
        },
        recipient: {
          postalCode: data.postalCodeDest,
          countryCode: "MX",
          address1: "ADRES SHIP",
          address2: "ADRES SHIP",
          cellPhone: "7731158787",
          city: "TULA",
          contactName: "ALBERTO",
          corporateName: "TEST CORP SHIP",
          state: "HD"
        },
        dimensions: {
          length: data.height,
          width: data.width,
          height: data.length,
          units: 'CM'
        },
        weight: {
          value: data.height,
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
          localStorage.setItem('quotation', JSON.stringify(data.getQuotation))
          localStorage.setItem('quotationBody', JSON.stringify(body))
          this.router.navigate([`in/${localStorage.getItem('id')!}/prices`]);
        }
      });
  }
  consultarCiudad(event: any) {

    console.log(event);
    if (event === "internacional") {
      this.helperService.getCityInternational()
        .subscribe(({ data }) => {
          this.paises = data.getCatCiudadesInt
          console.log(data);

        });
    } else if (event === "nacional") {
      this.helperService.getCityNacional()
        .subscribe(({ data }) => {
          this.paises = data.getCatCiudadesNac
          console.log(data);


        });
    }
  }

}
