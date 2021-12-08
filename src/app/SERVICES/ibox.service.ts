import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl = 'https://affable-seat-326818.uc.r.appspot.com/';
@Injectable({
  providedIn: 'root'
})
export class IboxService {

  constructor(private http: HttpClient) { }

  getEbox(): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify({
      query: `query GetEboxs {
        getEboxs {
          id
          postal_addr
          sucursal
          code
        }
      }
      `,
    })
    return this.http.post(baseUrl, body, { headers });
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
}
