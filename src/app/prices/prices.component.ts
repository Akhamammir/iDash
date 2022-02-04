import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { PackageService } from '../Services/package.service';


@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.styl']
})
export class PricesComponent implements OnInit {
  file: any
  listProvider: any;
  body: any;
  selectedValuesFeactures: string[] = [];
  constructor(private toastrService: NbToastrService, private router: Router, private packageService: PackageService) { }
  ngOnInit(): void {
    this.listProvider = JSON.parse(localStorage.getItem('quotation')!)
    this.body = JSON.parse(localStorage.getItem('quotationBody')!)
  }
  consultarPdfFedex(value:any) {
    localStorage.setItem('quotation', JSON.stringify(value))
    localStorage.setItem('shipment', 'FEDEX')
    this.router.navigate([`in/${localStorage.getItem('id')!}/customer`]);
    // let body = {
    //   input: {
    //     carrierId: "FEDEX",
    //     originInfo: {
    //       postalCode: this.body.input.shipper.postalCode,
    //       countryCode: this.body.input.shipper.countryCode,

    //     },
    //     destinationInfo: {
    //       postalCode: this.body.input.recipient.postalCode,
    //       countryCode: this.body.input.recipient.countryCode,

    //     },
    //     reference: "TEST REF",
    //     dimensions: {
    //       length: this.body.input.dimensions.length,
    //       width: this.body.input.dimensions.width,
    //       height: this.body.input.dimensions.height,
    //       units: this.body.input.dimensions.units,
    //     },
    //     weight: {
    //       units: this.body.input.weight.units,
    //       value: this.body.input.weight.value,
    //     }
    //   }
    // }
    // console.log(body);
    // this.packageService.getPdfPackage(body)
    //   .subscribe(({ data }) => {
    //     console.log(data.createLabelCarrier)
    //     if (data.createLabelCarrier.urlLabel) {
    //       window.open(data.createLabelCarrier.urlLabel, '_blank');
    //     } else {
    //       this.showToast('Error al generar la guia', 'danger')
    //     }

    //   });
  }
  consultarPdfEstefeta(alue:any) {
    localStorage.setItem('shipment', 'ESTAFETA')
  }
  downloadBase64File(contentType: any, base64Data: any, fileName: any) {
    const linkSource = `data:${contentType};base64,${base64Data}`;
    const downloadLink = document.createElement("a");
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  }

  showToast(message: string, status = 'success') {
    this.toastrService.show(
      status || 'success',
      message,
      { status }
    );
  }
}
