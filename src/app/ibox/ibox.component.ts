import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { IboxService } from '../Services/ibox.service';
import { Ibox } from '../ibox';
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
  constructor(private AR: ActivatedRoute, private messageService: MessageService, private http: HttpClient, private iboxService: IboxService) {

  }

  ngOnInit() {
    this.id = this.AR.snapshot.paramMap.get('id')!

    this.retrieveIboxs()
  }
  retrieveIboxs(): void {
    this.iboxService.getEbox()
      .subscribe(
        data => {
          this.iboxs = data.getEboxs;
          console.log(data);
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

}
