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
  tipo:any
  constructor(private iboxService: IboxService, private AR: ActivatedRoute) { }
  accion: string = ''
  ngOnInit(): void {
    this.llenardatos()
    this.checkingType()
    this.tipo === 'ibox' ? this.accion = 'i-Box' : this.accion = 'Paquetes'
    this.aaa()
  }

  checkingType(): void {
    this.AR.queryParams.subscribe(params => {
      if (params['tipo'] !== undefined) {
        this.tipo = params['tipo']
      }
    })
  }
  llenardatos(){
    this.iboxService.iboxEmmittet.subscribe(
      data => {
        this.data = data;
      }
    );
    this.data = JSON.parse(localStorage.getItem('data')!)
    this.data.vencimento =  new Date(new Date(this.data.vencimento).valueOf())
  }
  aaa(){
    console.log(this.data)

  }

}
