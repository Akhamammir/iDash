import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
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
  statuses: SelectItem[] = [];
  clonedProducts: { [s: string]: Product; } = {};
  iboxs?: Ibox[];
  constructor(private AR: ActivatedRoute, private messageService: MessageService, private iboxService: IboxService, private router: Router, private toastrService: NbToastrService) {

  }

  ngOnInit() {
    this.id = this.AR.snapshot.paramMap.get('id')!

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
  editar(body: any){
    this.router.navigate([`in/${localStorage.getItem('id')!}/ebox/new`], { queryParams: { id: body } })
  }
  eliminar(parms: any){
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
  onSort() {
    this.updateRowGroupMetaData();
  }

  updateRowGroupMetaData() {
    this.rowGroupMetadata = {};

    if (this.iboxs !== null) {
      for (let i = 0; i < this.iboxs!.length; i++) {
        let rowData = this.iboxs![i];
        let representativeName = rowData.name;

        if (i == 0) {
          this.rowGroupMetadata[representativeName!] = { index: 0, size: 1 };
        }
        else {
          let previousRowData = this.products[i - 1];
          let previousRowGroup = previousRowData.representative!.name;
          if (representativeName === previousRowGroup)
            this.rowGroupMetadata[representativeName!].size++;
          else
            this.rowGroupMetadata[representativeName!] = { index: i, size: 1 };
        }
      }
    }
  }

  onRowEditInit(product: Product) {
    this.clonedProducts[product.id!] = { ...product };
    this.editing = !this.editing;
  }

  onRowEditSave(product: Product) {


    delete this.clonedProducts[product.id!];
    this.messageService.add({ severity: 'success', summary: 'Bien Hecho', detail: 'I-box actualizado correctamente', });



    this.editing = !this.editing;

  }

  onRowEditCancel(product: Product, index: number) {
    this.products[index] = this.clonedProducts[product.id!];
    delete this.clonedProducts[product.id!];
    this.editing = !this.editing;
  }
  showToast(message: string, status = 'success') {
    this.toastrService.show(
      status || 'success',
      message,
      { status }
    );
  }
}
