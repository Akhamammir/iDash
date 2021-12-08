import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const baseUrl = 'https://affable-seat-326818.uc.r.appspot.com/';
@Injectable({
  providedIn: 'root'
})
export class PackageService {



  constructor(private http: HttpClient) { }
  create(data: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify({
      query: `mutation Mutation($insertPackageInput: PackageInput) {
        insertPackage(input: $insertPackageInput)
      }
      `,
      variables:
        JSON.stringify(data),
    })
    return this.http.post(baseUrl, body, { headers });
  }

  getQuotation(data: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify({
      query: `query Query($getQuotationInput: featuresPackageInput) {
        getQuotation(input: $getQuotationInput){
          name
          shipRates {
            cost
            currency
            deliveryTime
            id
          }
        }
      }
      `,
      variables:
        JSON.stringify(data),
    })
    return this.http.post(baseUrl, body, { headers });
  }

  getPdfPackage(data: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify({
      query: `mutation Mutation($createLabelCarrierInput: createLabelInput) {
        createLabelCarrier(input: $createLabelCarrierInput) {
          urlLabel
          trackId
        }
      }
      `,
      variables:
        JSON.stringify(data),
    })
    return this.http.post(baseUrl, body, { headers });
  }
  createlist(data: any): Observable<any> {
    return this.http.post(baseUrl + '/list', data);
  }
  getPackage(data: any): Observable<any> {
    console.log(data, 'fuc')
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify({
      query: `query GetPackage($getPackageId: String) {
        getPackage(id: $getPackageId) {
          id
          country_org
          country_dest
          wt
          size {
            ig
            wd
            ht
          }
          recieved
          type
          tracking
          recieve
          sender
          desc
        }
      }`,
      variables:
        JSON.stringify(data),
    })
    return this.http.post(baseUrl, body, { headers });
  }
}
