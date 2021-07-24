import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../productservice';
import { ActivatedRoute } from '@angular/router';
import { SelectItem } from 'primeng/api';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-ibox',
  templateUrl: './ibox.component.html',
  styleUrls: ['./ibox.component.styl']
})
export class IboxComponent implements OnInit {
  id: string = '';
  productDialog: boolean = false;
  editing: boolean = false;
  products: Product[] = [];
  rowGroupMetadata: any;
  carname: string = 'asdasd';
  product: Product = {};
  products1: Product[] = [];
  products2: Product[] = [];

  statuses: SelectItem[] = [];

  clonedProducts: { [s: string]: Product; } = {};
  selectedProducts: Product[] = [];

  submitted: boolean = false;

  constructor(private AR: ActivatedRoute,
   private productService: ProductService, private messageService: MessageService
   ) {
    this.product = {
      "id": "1000",
      "name": "James Butt",
      "country": {
        "name": "Algeria",
        "code": "dz"
      },
      "company": "Benton, John B Jr",
      "date": "2015-09-13",
      "status": "unqualified",
      "activity": 17,
      "representative": {
        "name": "Ioni Bowcher",
        "image": "ionibowcher.png"
      }

    }
  }

  ngOnInit() {
    this.id = this.AR.snapshot.paramMap.get('id')!
    this.productService.getProducts().then(data => this.products = data);
  }
  onSort() {
    this.updateRowGroupMetaData();
  }

  updateRowGroupMetaData() {
    this.rowGroupMetadata = {};

    if (this.products !== null) {
      for (let i = 0; i < this.products.length; i++) {
        let rowData = this.products[i];
        let representativeName = rowData.representative!.name;

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

    if (product.price! > 0) {
      delete this.clonedProducts[product.id!];

    }
    this.editing = !this.editing;

  }

  onRowEditCancel(product: Product, index: number) {
    this.products[index] = this.clonedProducts[product.id!];
    delete this.clonedProducts[product.id!];
    this.editing = !this.editing;
  }

}
