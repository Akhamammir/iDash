import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../customer';
import { IboxService } from '../Services/ibox.service';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.styl']
})
export class ProcessComponent implements OnInit {

  customer: Customer[] = [];
  data: any
  id: string = '';
  hoy: Date = new Date()
  tipo: any
  constructor(private iboxService: IboxService, private AR: ActivatedRoute) { }
  accion: string = ''
  servicio: string = ''
  quotation: any
  ngOnInit(): void {
    this.checkingType()
    this.aaa()
  }

  checkingType(): void {
    this.AR.queryParams.subscribe(params => {
      if (params['tipo'] !== undefined) {
        this.tipo = params['tipo']
      }
    })

    switch (this.tipo) {
      case 'ibox':
        this.accion = 'i-Box'
        this.llenardatos('data')
        break;
      case 'paquete':
        this.accion = 'Paquetes'
        break;
      case 'guia':
        this.accion = 'Guia'
        this.llenardatos('shipmentData')
        this.servicio = localStorage.getItem('shipment')!
        this.quotation = JSON.parse(localStorage.getItem('quotation')!)
        break;

      default:
        break;
    }
  }
  llenardatos(value: string) {
    this.data = JSON.parse(localStorage.getItem(value)!)
    if (this.tipo === 'ibox') {
      this.data.vencimento = new Date(new Date(this.data.vencimento).valueOf())
    }
  }
  aaa() {
    console.log(this.data)
    console.log(this.quotation)
  }

}
