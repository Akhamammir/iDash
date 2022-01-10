import { Component, OnInit, } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { IboxService } from '../Services/ibox.service';
import { Ibox } from '../ibox';
import { NbToastrService } from '@nebular/theme';
@Component({
  selector: 'app-ibox',
  templateUrl: './ibox.component.html',
  styleUrls: ['./ibox.component.styl']
})
export class IboxComponent implements OnInit {
  id: string = '';
  editing: boolean = false;
  products: Product[] = [];
  rowGroupMetadata: any;
  product: Product = {};
  statuses: any
  clonedProducts: { [s: string]: Product; } = {};
  iboxs?: Ibox[];
  constructor(private AR: ActivatedRoute, private iboxService: IboxService, private router: Router, private toastrService: NbToastrService) {

  }

  ngOnInit() {
    this.id = this.AR.snapshot.paramMap.get('id')!
    this.statuses = [
      { name: 'Activo' },
      { name: 'Vencido' },
      { name: 'Renovacion' },

    ]
    this.retrieveIboxs()
  }
  retrieveIboxs(): void {
    this.iboxService.getEbox()
      .subscribe(
        response => {
          this.iboxs = response.data.getIboxs;
          console.log(response);
        });
  }
  editar(body: any) {
    this.router.navigate([`in/${localStorage.getItem('id')!}/ebox/new`], { queryParams: { id: body } })
  }
  eliminar(parms: any) {
    console.log('elimi', parms)
    let body = {
      deleteIboxId: parms
    }
    this.iboxService.delete(body)
      .subscribe(
        response => {
          if (!response.errors) {
            console.log(response)
            this.retrieveIboxs()
            if (response.data.deleteIbox.includes('Ibox eliminada!')) {
              this.showToast('Eliminado Correctamente')
              this.router.navigate([`in/${localStorage.getItem('id')!}/ebox`], { skipLocationChange: true })
            } else {
              this.showToast('Problemas con la base de datos', 'danger')
            }
            this.retrieveIboxs()
            this.router.navigate([`in/${localStorage.getItem('id')!}/ebox`])
          } else {
            this.showToast(response.errors[0].message, 'danger')
          }
        });
  }
  showToast(message: string, status = 'success') {
    this.toastrService.show(
      status || 'success',
      message,
      { status }
    );
  }

  asd(event: any) {
    if (event) {
      console.log(event.name)
      let a: any = []
      this.iboxs!.map(e => {
        if (e.status === event.name) {
          a.push(e)
        }

      })
      this.iboxs = a
    }else{
      this.retrieveIboxs()
    }

  }
}
