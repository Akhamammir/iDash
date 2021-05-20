import { Component, OnInit } from '@angular/core';
import { Phone } from '../phone';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.styl']
})
export class CustomerComponent implements OnInit {

  constructor() { }
  phones: Phone[] = [];
  selectedValuesFeactures: string[] = [];


  nombreDe: string = '';
  empresaDe: string = '';
  paisDe: string = '';
  direccionDe: string = '';
  direccion2De: string = '';
  direccion3De: string = '';
  codigoPostalDe: string = '';
  cuidadDe: string = '';
  estadoDe: string = '';
  emailDe: string = '';
  tipoTelefonoDe: string = '';
  codigoDe: string = '';
  telefonoDe: string = '';

  nombreA: string = '';
  empresaA: string = '';
  paisA: string = '';
  direccionA: string = '';
  direccion2A: string = '';
  direccion3A: string = '';
  codigoPostalA: string = '';
  cuidadA: string = '';
  estadoA: string = '';
  emailA: string = '';
  tipoTelefonoA: string = '';
  codigoA: string = '';
  telefonoA: string = '';
  ngOnInit(): void {
    this.phones = [
      { name: 'Celular' },
      { name: 'Fijo' }
    ];
  }

}
