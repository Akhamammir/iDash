import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-outgoingmail',
  templateUrl: './outgoingmail.component.html',
  styleUrls: ['./outgoingmail.component.styl']
})
export class OutgoingmailComponent implements OnInit {
  id: string = '';
  constructor(private AR: ActivatedRoute) { }
  shops:string[] = [];
  countrys:string[] = [];
  destiny:string[] = [];
  extraServices:string[] = [];
  tiendaOrigen:string = "";
  tipoServicioSize:string = "";
  paisDestino:string = "";
  tipoServicio:string = "";
  zonaDestino:string = "";
  tipodeEnvio:string[] = []
  ngOnInit(): void {
    this.id = this.AR.snapshot.paramMap.get('id')!
  }

}
