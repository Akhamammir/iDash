import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exitopackage',
  templateUrl: './exitopackage.component.html',
  styleUrls: ['./exitopackage.component.styl']
})
export class ExitopackageComponent implements OnInit {
  id: string = '';
  textoTipo: string = '';
  tipo: string = '';
  data:any
  constructor(private AR: ActivatedRoute) { }

  ngOnInit(): void {
    this.checkingType()
    this.tipo === 'ibox' ? this.textoTipo = 'I-box Vendido' : this.textoTipo = 'Paquete Vendido'
    this.obtenerQuery()
  }
  checkingType(): void {
    this.AR.queryParams.subscribe(params => {
      if (params['tipo'] !== undefined) {
        this.tipo = params['tipo']
      }
    })
  }
  obtenerQuery(){
    this.data  =  JSON.parse(localStorage.getItem('url')!)
    console.log(this.data);
  }
  downloadTicket(){
    console.log(this.data);
    window.location.href = this.data.urlFile
  }
}
