import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PackageService } from '../SERVICES/package.service';

const listadePagquetes = [
  { name: 'FEDEX', shipRates: [] },
  {
    name: "ESTAFETA",
    shipRates: [
      { cost: '521.77', currency: 'NA', deliveryTime: 'NA', id: 'Dia Sig.' },
      { cost: '263.92', currency: 'NA', deliveryTime: 'NA', id: 'Terrestre' },
      { cost: '514.46', currency: 'NA', deliveryTime: 'NA', id: '2 Dias' },
      { cost: '0', currency: 'NA', deliveryTime: 'NA', id: 'LTL' },
      { cost: '0', currency: 'NA', deliveryTime: 'NA', id: 'TERREST1K' }
    ]
  }
]
@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.styl']
})
export class PricesComponent implements OnInit {
  file: any
  listProvider: any;
  selectedValuesFeactures: string[] = [];
  id: string = '';
  constructor(private AR: ActivatedRoute, private router: Router, private packageService: PackageService) {
    // const navigation = this.router.getCurrentNavigation();
    // if (navigation?.extras) {
    //   console.log(navigation)
    //   const state = navigation!.extras.state as { data: any };
    //   console.log(state.data);
    //   this.listProvider = state.data.getQuotation ? Array.from(state.data.getQuotation) : listadePagquetes;
    // } else {
    //   this.listProvider = listadePagquetes;
    // }
    console.log(Array.from(listadePagquetes));
    this.listProvider = Array.from(listadePagquetes);
  }
  consultarPdfFedex() {
    console.log('xD')
    let body = {
      createLabelCarrierInput: {
        carrierId: "FEDEX",
        dimensions: {
          height: 45,
          length: 10,
          units: "CM",
          width: 10,
        },
        destinationInfo: {
          address1: "ADREES",
          address2: "ADRES2",
          cellPhone: "656323",
          city: "CDMX",
          contactName: "TEST",
          corporateName: "NA",
          countryCode: "MX",
          postalCode: "14000",
          state: "CDMX"
        },
        originInfo: {
          address1: "ADREES",
          address2: "ADRES2",
          cellPhone: "656323",
          city: "CDMX",
          contactName: "TEST",
          corporateName: "NA",
          countryCode: "MX",
          postalCode: "04360",
          state: "CDMX"
        },
        reference: "CASA VERDE",
        weight: {
          units: "KG",
          value: "1"
        }

      }
    }
    this.packageService.getPdfPackage(body)
      .subscribe(
        response => {
          this.downloadBase64File('application/pdf', response.data.createLabelCarrier.urlLabel, 'pdfGeneradoFedex.pdf')
        },
        error => {
          console.log(error);
        });
  }
  consultarPdfEstefeta() {
    console.log('xD')
    let body = {
      createLabelCarrierInput: {
        carrierId: "ESTAFETA",
        dimensions: {
          height: 45,
          length: 10,
          units: "CM",
          width: 10,
        },
        destinationInfo: {
          address1: "ADREES",
          address2: "ADRES2",
          cellPhone: "656323",
          city: "CDMX",
          contactName: "TEST",
          corporateName: "NA",
          countryCode: "MX",
          postalCode: "14000",
          state: "CDMX"
        },
        originInfo: {
          address1: "ADREES",
          address2: "ADRES2",
          cellPhone: "656323",
          city: "CDMX",
          contactName: "TEST",
          corporateName: "NA",
          countryCode: "MX",
          postalCode: "04360",
          state: "CDMX"
        },
        reference: "CASA VERDE",
        weight: {
          units: "KG",
          value: "1"
        }

      }
    }
    this.packageService.getPdfPackage(body)
      .subscribe(
        response => {
          this.downloadBase64File('application/pdf', response.data.createLabelCarrier.urlLabel, 'pdfGeneradoEstafeta.pdf')
        },
        error => {
          console.log(error);
        });
  }
  downloadBase64File(contentType:any, base64Data:any, fileName:any) {
    const linkSource = `data:${contentType};base64,${base64Data}`;
    const downloadLink = document.createElement("a");
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
}
  ngOnInit(): void {
    this.id = this.AR.snapshot.paramMap.get('id')!
  }

}
