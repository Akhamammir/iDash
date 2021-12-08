import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { ValijaService } from '../Services/valija.service';

@Component({
  selector: 'app-valija-list',
  templateUrl: './valija-list.component.html',
  styleUrls: ['./valija-list.component.styl']
})
export class ValijaListComponent implements OnInit {

  constructor(private valijaService: ValijaService, private toastrService: NbToastrService, private router: Router) { }
  first = 0;
  rows = 10;
  valijas: any[] = [];
  totalRegisters: any
  selectedProduct1: any
  ngOnInit(): void {
    this.getValijas()
  }
  getValijas() {
    this.valijaService.getValijas()
      .subscribe(
        response => {
          console.log(response)
          if (!response.errors) {
            this.valijas = response.data.getValijas
            this.totalRegisters = response.data.getValijas.length;
          } else {
            this.showToast(response.errors[0].message, 'danger')
          }
        });
  }

  editar(body: any) {
    console.log('asdasd', body)
    this.router.navigate([`in/${localStorage.getItem('id')!}/valija`], { queryParams: { id: body } })
  }
  eliminarValija(parms: any){
    console.log('elimi', parms)
    let body = {
      deleteValijaId: parms
    }
    this.valijaService.eliminarValija(body)
      .subscribe(
        response => {
          if (!response.errors) {
            console.log(response)
            this.getValijas()
            if (response.data.deleteValija.includes('Valija eliminada!')) {
              this.showToast('Eliminado Correctamente')
              this.router.navigate([`in/${localStorage.getItem('id')!}/valija/list`], { skipLocationChange: true })
            } else {
              this.showToast('Problemas con la base de datos', 'danger')
            }
            this.getValijas()
            this.router.navigate([`in/${localStorage.getItem('id')!}/valija/list`])
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
