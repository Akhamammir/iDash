import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const baseUrl = 'https://affable-seat-326818.uc.r.appspot.com/';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  constructor(private http: HttpClient) { }

  getPais(): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify({
      query: `query GetCatPais {
        getCatPais {
          Codigo
          Nombre
          idPais
        }
      }`
    })
    return this.http.post(baseUrl, body, { headers });
  }
  getStores(): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify({
      query: `query GetCatTiendas {
        getCatTiendas {
          Codigo
          Nombre
          US
          Tel
          eMailGerente
          RFC
          RazonSocial
        }
      }`
    })
    return this.http.post(baseUrl, body, { headers });
  }
  getPrice(data: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify({
      query: `query GetCatEboxPreciosByCode($code: String) {
        getCatEboxPreciosByCode(code: $code) {
          codigo
          precio12_1
          precio12_2
          precio1_1
          precio1_2
          precio2_1
          precio4_1
          precio4_2
          precio7_1
          precio7_2
          preciox1
          preciox12
          preciox2
        }
      }`  , variables:
        JSON.stringify(data),
    })
    return this.http.post(baseUrl, body, { headers });
  }
}
