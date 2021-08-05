import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { SelectItem } from 'primeng/api';
<<<<<<< HEAD
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { IboxService } from '../SERVICES/ibox.service';
import { Ibox } from '../ibox';
=======
import {MessageService} from 'primeng/api';
>>>>>>> 6cc53f7a44020ba5f0b7f2be7a34283ca5e9b59e
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
<<<<<<< HEAD
  iboxs?: Ibox[];
  constructor(private AR: ActivatedRoute, private messageService: MessageService, private http: HttpClient, private iboxService: IboxService) {
=======
  selectedProducts: Product[] = [];

  submitted: boolean = false;

  constructor(private AR: ActivatedRoute,
   private productService: ProductService, private messageService: MessageService
   ) {
>>>>>>> 6cc53f7a44020ba5f0b7f2be7a34283ca5e9b59e
    this.product = {
      "id": "1875",
      "name": "Erick Torres",
      "country": {
        "name": "Contenido 1        Contenido 2",
        "code": "dz"
      },
      "company": "Benton, John B Jr",
      "date": "2015-09-13",
      "status": "active",
      "activity": 17,
      "representative": {
        "name": "1850",
        "image": "ionibowcher.png"
      }

    }
  }

  ngOnInit() {
    this.id = this.AR.snapshot.paramMap.get('id')!

    this.retrieveIboxs()
  }
  retrieveIboxs(): void {
    this.iboxService.getAll()
      .subscribe(
        data => {
          this.iboxs = data;
          console.log(data);
        },
        error => {
          console.log(error);
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
