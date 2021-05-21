import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-stepper-detail',
  templateUrl: './stepper-detail.component.html',
  styleUrls: ['./stepper-detail.component.styl']
})
export class StepperDetailComponent implements OnInit {

  constructor(private AR: ActivatedRoute) { }
  id: string = '';

  items: MenuItem[] = [];

  ngOnInit(): void {
    this.id = this.AR.snapshot.paramMap.get('id')!
    this.items = [{
      label: 'Elegir Operación',
      routerLink: ['../../dash', this.id]
    },
    {
      label: 'Características',
      routerLink: ['../../features', this.id]
    },
    {
      label: 'Precios',
      routerLink: ['../../prices', this.id]
    },
    {
      label: 'Datos del Cliente',
      routerLink: ['../../customer', this.id]
    },
    {
      label: 'Procesar pedido',
      routerLink: ['../../process', this.id]
    },
    {
      label: 'Confirmación',
      routerLink: ['../../confirmation', this.id]
    }
    ];
  }

}
