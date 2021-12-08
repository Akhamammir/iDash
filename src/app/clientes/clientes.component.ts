import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { ClientesService } from '../Services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.styl']
})
export class ClientesComponent implements OnInit {

  constructor(private clienteService: ClientesService, private toastrService: NbToastrService, private router: Router) { }
  first = 0;
  rows = 10;
  clientes: any[] = [];
  totalRegisters: any
  selectedProduct1: any
  ngOnInit(): void {
    this.getClientes()
  }
  getClientes() {
    this.clienteService.getClientes()
      .subscribe(
        response => {
          console.log(response)
          if (!response.errors) {
            this.clientes = response.data.getClientes
            this.totalRegisters = response.data.getClientes.length;
          } else {
            this.showToast(response.errors[0].message, 'danger')
          }
        });
  }

  editar(body: any) {
    this.router.navigate([`in/${localStorage.getItem('id')!}/newcustomerebox`], { queryParams: { id: body } })
  }
  eliminar(parms: any){
    console.log('elimi', parms)
    let body = {
      deleteClienteId: parms
    }
    this.clienteService.eliminarCliente(body)
      .subscribe(
        response => {
          if (!response.errors) {
            console.log(response)
            this.getClientes()
            if (response.data.deleteCliente.includes('Cliente eliminada!')) {
              this.showToast('Eliminado Correctamente')
              this.router.navigate([`in/${localStorage.getItem('id')!}/clientes`], { skipLocationChange: true })
            } else {
              this.showToast('Problemas con la base de datos', 'danger')
            }
            this.getClientes()
            this.router.navigate([`in/${localStorage.getItem('id')!}/clientes`])
          } else {
            this.showToast(response.errors[0].message, 'danger')
          }
        });
  }
  showValija(valija: any) {
    const navigationExtras: NavigationExtras = { state: { data: valija } }
    this.router.navigate([`in/${localStorage.getItem('id')!}/sellingpackage`], navigationExtras);
    console.log(valija)
  }
  showToast(message: string, status = 'success') {
    this.toastrService.show(
      status || 'success',
      message,
      { status }
    );
  }

}
