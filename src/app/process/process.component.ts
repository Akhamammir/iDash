import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../customer';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.styl']
})
export class ProcessComponent implements OnInit {

  customer: Customer[] = [];
  id: string = '';
  constructor(private AR: ActivatedRoute) { }

  ngOnInit(): void {
    this.customer = [
      { servicio: 'Nacional', destino: 'Acapulco, GRO', trakingNumber: 879898655, id: 2856, codigoCliente: 502003, nombre: 'Erick Antonio Delgado Torres',subtotal: '$10,0000.00' , iva:'$1,600.00', totalPagar:'$11,600.00'}
    ];
    this.id = this.AR.snapshot.paramMap.get('id')!
  }

}
