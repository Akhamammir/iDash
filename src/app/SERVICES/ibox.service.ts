import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ibox } from '../ibox';
const baseUrl = 'http://localhost:8080/api/ibox/customer';
@Injectable({
  providedIn: 'root'
})
export class IboxService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Ibox[]> {
    return this.http.get<Ibox[]>(baseUrl);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
}
