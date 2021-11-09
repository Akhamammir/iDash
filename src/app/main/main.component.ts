import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbSidebarService } from '@nebular/theme';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.styl']
})
export class MainComponent implements OnInit {
  id: string = '';
  items: MenuItem[]; items2: MenuItem[]; cities: any[];
  selectedCity: any;
  private sub: any;
  constructor(private AR: ActivatedRoute,  private sidebarService: NbSidebarService) {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-pi pi-home',
        routerLink: './dash'
      }, {
        label: 'Administración',
        icon: 'pi pi-fw pi-calendar',
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
        label: 'POS',
        icon: 'pi pi-fw pi-ticket',
        items: [
          {
            label: 'Administración',
          },
          {
            label: 'Reportes',
          },
          {
            label: 'Paquetes',
          },
          {
            label: 'Correo Saliente',
          },
          {
            label: 'Ventas Corporativas',
          }
        ]
      }, {
        label: 'Correo Entrante',
        icon: 'pi pi-fw pi-envelope',
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
        label: 'Correo Saliente',
        icon: 'pi pi-fw pi-envelope',
        routerLink: './email'
      }, {
        label: 'Paquetes',
        icon: 'pi pi-pi pi-inbox',
        routerLink: './package'
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
  toggle() {
    this.sidebarService.toggle();
  }
  ngOnInit(): void {
    this.id = this.AR.snapshot.paramMap.get('id')!
  }

}
