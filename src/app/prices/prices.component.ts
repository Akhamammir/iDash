import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private AR: ActivatedRoute, private router: Router, private packageService: PackageService) {


  }
  consultarPdfFedex() {
    console.log('xD', this.listProvider)
    let body = {
      input: {
        carrierId: "FEDEX",
        originInfo: {
          postalCode: this.body.input.shipper.postalCode,
          countryCode: this.body.input.shipper.countryCode,
          address1: this.body.input.shipper.address1,
          address2: this.body.input.shipper.address2,
          cellPhone: this.body.input.shipper.cellPhone,
          city: this.body.input.shipper.city,
          contactName: this.body.input.shipper.contactName,
          corporateName: this.body.input.shipper.corporateName,
          state: this.body.input.shipper.state
        },
        destinationInfo: {
          postalCode: "42803",
          countryCode: this.body.input.recipient.countryCode,
          address1: this.body.input.recipient.address1,
          address2: this.body.input.recipient.address2,
          cellPhone: this.body.input.recipient.cellPhone,
          city: this.body.input.recipient.city,
          contactName: this.body.input.recipient.contactName,
          corporateName: this.body.input.recipient.corporateName,
          state: this.body.input.recipient.state
        },
        reference: "TEST REF",
        dimensions: {
          length: this.body.input.dimensions.length,
          width: this.body.input.dimensions.width,
          height: this.body.input.dimensions.height,
          units: this.body.input.dimensions.units,
        },
        weight: {
          units: this.body.input.weight.units,
          value: this.body.input.weight.value,
        }
      }
    }
    console.log(body);
    this.packageService.getPdfPackage(body)
      .subscribe(({ data }) => {
        console.log(data.createLabelCarrier)
        window.open(data.createLabelCarrier.urlLabel, '_blank');
      });
  }
  consultarPdfEstefeta() {
    console.log('xD', this.listProvider)
    let body = {
      input: {
        carrierId: "ESTAFETA",
        originInfo: {
          postalCode: this.body.shipper.postalCode,
          countryCode: this.body.shipper.countryCode,
          address1: this.body.shipper.address1,
          address2: this.body.shipper.address2,
          cellPhone: this.body.shipper.cellPhone,
          city: this.body.shipper.city,
          contactName: this.body.shipper.contactName,
          corporateName: this.body.shipper.corporateName,
          state: this.body.shipper.state
        },
        destinationInfo: {
          postalCode: this.body.recipient.postalCode,
          countryCode: this.body.recipient.countryCode,
          address1: this.body.recipient.address1,
          address2: this.body.recipient.address2,
          cellPhone: this.body.recipient.cellPhone,
          city: this.body.recipient.city,
          contactName: this.body.recipient.contactName,
          corporateName: this.body.recipient.corporateName,
          state: this.body.recipient.state
        },
        reference: "TEST REF",
        dimensions: {
          length: this.body.dimensions.length,
          width: this.body.dimensions.width,
          height: this.body.dimensions.height,
          units: this.body.dimensions.units,
        },
        weight: {
          units: this.body.weight.units,
          value: this.body.weight.value,
        }
      }
    }
    this.packageService.getPdfPackage(body)
      .subscribe(({ data }) => {
        console.log(data.createLabelCarrier)
      });
  }
  downloadBase64File(contentType: any, base64Data: any, fileName: any) {
    const linkSource = `data:${contentType};base64,${base64Data}`;
    const downloadLink = document.createElement("a");
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  }
  ngOnInit(): void {
    this.listProvider = JSON.parse(localStorage.getItem('quotation')!)
    this.body = JSON.parse(localStorage.getItem('quotationBody')!)
  }

}
