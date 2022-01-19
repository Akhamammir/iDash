import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-main-customer',
  templateUrl: './main-customer.component.html',
  styleUrls: ['./main-customer.component.styl']
})
export class MainCustomerComponent implements OnInit {
  items: MenuItem[]; items2: MenuItem[]; cities: any[];
  selectedCity: any;
  constructor() {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-pi pi-home'
      }, {
        label: 'Administración',
        icon: 'pi pi-fw pi-calendar',

      }, {
        label: 'Cotizar',
        icon: 'pi pi-fw pi-ticket',
        items: [
          {
            label: 'Left',
            icon: 'pi pi-fw pi-align-left'
          },
          {
            label: 'Right',
            icon: 'pi pi-fw pi-align-right'
          },
          {
            label: 'Center',
            icon: 'pi pi-fw pi-align-center'
          },
          {
            label: 'Justify',
            icon: 'pi pi-fw pi-align-justify'
          }
        ]
      }, {
        label: 'Envios',
        icon: 'pi pi-fw pi-envelope',
        items: [
          {
            label: 'Crear envios',
            icon: 'pi pi-fw pi-align-left'
          },
          {
            label: 'Mis envios',
            icon: 'pi pi-fw pi-align-right'
          },
        ]
      }, {
        label: 'Pagos y facturación',
        icon: 'pi pi-fw pi-envelope',
      }
    ]
    this.items2 = [
      {
        label: 'Configuración',
        icon: 'pi pi-pi pi-cog'
      }, {
        label: 'Ayuda',
        icon: 'pi pi-pi pi-info-circle'
      }, {
        label: 'Salir',
        icon: 'pi pi-pi pi-power-off'
      }
    ];
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];

  }

  ngOnInit(): void {
  }

}
