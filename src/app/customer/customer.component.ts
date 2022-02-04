import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Phone } from '../phone';
import { HelpersService } from '../Services/helpers.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.styl']
})
export class CustomerComponent implements OnInit {
  id: string = '';
  constructor(private helperService: HelpersService, private fb: FormBuilder, private router: Router) { }
  phones: Phone[] = [];
  selectedValuesFeactures: string[] = [];
  paises: any
  ShippmentForm: FormGroup | undefined;
  ngOnInit(): void {
    this.phones = [
      { name: 'Celular' },
      { name: 'Fijo' }
    ];
    this.createForm();
    this.getPais()
  }

  createForm(): void {
    this.ShippmentForm = new FormGroup({
      nombreDe: new FormControl('', Validators.required),
      empresaDe: new FormControl('', Validators.required),
      paisDe: new FormControl('', Validators.required),
      direccionDe: new FormControl('', Validators.required),
      direccion2De: new FormControl('', Validators.required),
      direccion3De: new FormControl('', Validators.required),
      codigoPostalDe: new FormControl('', Validators.required),
      cuidadDe: new FormControl('', Validators.required),
      estadoDe: new FormControl('', Validators.required),
      emailDe: new FormControl('', Validators.required),
      tipoTelefonoDe: new FormControl('', Validators.required),
      codigoDe: new FormControl('', Validators.required),
      telefonoDe: new FormControl('', Validators.required),
      notifications: this.fb.group({
        notiemail: new FormControl(false,),
        direccion_residencial: new FormControl(false,),
        notisms: new FormControl(false,),
      }),


      nombreA: new FormControl('', Validators.required),
      empresaA: new FormControl('', Validators.required),
      paisA: new FormControl('', Validators.required),
      direccionA: new FormControl('', Validators.required),
      direccion2A: new FormControl('', Validators.required),
      direccion3A: new FormControl('', Validators.required),
      codigoPostalA: new FormControl('', Validators.required),
      cuidadA: new FormControl('', Validators.required),
      estadoA: new FormControl('', Validators.required),
      emailA: new FormControl('', Validators.required),
      tipoTelefonoA: new FormControl('', Validators.required),
      codigoA: new FormControl('', Validators.required),
      telefonoA: new FormControl('', Validators.required),



    })
  }
  getPais() {
    this.helperService.getPais()
      .subscribe(
        response => {
          console.log(response);
          if (!response.errors) {
            this.paises = response.data.getCatPais
          }
        }
      )
  }
  onSubmit() {
    const data = this.ShippmentForm!.value
    console.log(data)
    localStorage.setItem('shipmentData', JSON.stringify(data))
    this.router.navigate([`in/${localStorage.getItem('id')}/process`], { queryParams: { tipo: 'guia' } });
  }
}
