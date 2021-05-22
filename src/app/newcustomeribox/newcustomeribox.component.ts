import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Phone } from '../phone';

@Component({
  selector: 'app-newcustomeribox',
  templateUrl: './newcustomeribox.component.html',
  styleUrls: ['./newcustomeribox.component.styl']
})
export class NewcustomeriboxComponent implements OnInit {
  id: string = '';
  constructor(private AR: ActivatedRoute) { }
  phones: Phone[] = [];
  selectedValuesCustomerIbox: string[] = [];
  notificaciones: string[] = [];
  tipoTelefonoDe: string = '';
  ngOnInit(): void {
    this.phones = [
      { name: 'Celular' },
      { name: 'Fijo' }
    ];
    this.id = this.AR.snapshot.paramMap.get('id')!
  }

}
