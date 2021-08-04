import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListPackage, Package } from './packages';
const baseUrl = 'http://localhost:8080/api/package';
@Injectable({
  providedIn: 'root'
})
export class PackageService {



  constructor(private http: HttpClient) { }
  getAll(): Observable<Package[]> {
    return this.http.get<Package[]>(baseUrl);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  getAllList(): Observable<any> {
    return this.http.get<any>(baseUrl+'/list');
  }
  createlist(data: any): Observable<any> {
    return this.http.post(baseUrl+'/list', data);
  }
}
