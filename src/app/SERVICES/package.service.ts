import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListPackage, Package } from './packages';
const baseUrl = 'http://localhost:4000/';
@Injectable({
  providedIn: 'root'
})
export class PackageService {



  constructor(private http: HttpClient) { }
  getAll(data: any): Observable<any> {
    return this.http.post(baseUrl,
      { "query": "query ExampleQuery {\n  getEboxs {\n    id\n  }\n  getClienteEboxs {\n    id\n  }\n  getPackages {\n    id\n  }\n}\n", "variables": {}, "operationName": "ExampleQuery" }
    );
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  getAllList(): Observable<any> {
    return this.http.get<any>(baseUrl + '/list');
  }
  createlist(data: any): Observable<any> {
    return this.http.post(baseUrl + '/list', data);
  }
}
