import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ibox } from '../ibox';
const baseUrl = 'https://affable-seat-326818.uc.r.appspot.com/';
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
