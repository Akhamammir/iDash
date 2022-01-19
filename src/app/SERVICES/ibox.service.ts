import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ibox } from '../ibox';
const baseUrl = 'https://affable-seat-326818.uc.r.appspot.com/';
@Injectable({
  providedIn: 'root'
})
export class IboxService {

  ibox :any
  @Output()
  iboxEmmittet = new EventEmitter<any>();

  constructor(private http: HttpClient) { }

  setIbox(newIbox:any) {
    this.ibox = newIbox;
    this.obtenerIbox()
  }
  obtenerIbox() {
    this.iboxEmmittet.emit(this.ibox);
  }
  registrarPagoIbox(data: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify({
      query: `mutation RegistraPago($input: PagoInput) {
        registraPago(input: $input) {
          urlFile
          idPago
        }
      }`  , variables:
        JSON.stringify(data),
    })
    return this.http.post(baseUrl, body, { headers });
  }
  getEbox(): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify({
      query: `query GetIboxs {
        getIboxs {
          id
          noIbox
          codigoCliente
          nombreCliente
          idioma
          meses
          plan
          status
          comentarios
          vencimento
          precio
          tiendaDestino
        }
      }
      `,
    })
    return this.http.post(baseUrl, body, { headers });
  }
  getIbox(data: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify({
      query: `query GetIbox($getIboxId: String) {
        getIbox(id: $getIboxId) {
          id
          noIbox
          nombreCliente
          codigoCliente
          idioma
          meses
          plan
          status
          comentarios
          vencimento
          precio
          tiendaDestino
        }
      }`  , variables:
        JSON.stringify(data),
    })
    return this.http.post(baseUrl, body, { headers });
  }
  create(data: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify({
      query: `mutation Mutation($input: IboxInput) {
        insertIbox(input: $input)
      }`  , variables:
        JSON.stringify(data),
    })
    return this.http.post(baseUrl, body, { headers });
  }
  delete(data: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify({
      query: `mutation DeleteIbox($deleteIboxId: String) {
        deleteIbox(id: $deleteIboxId)
      }`  , variables:
        JSON.stringify(data),
    })
    return this.http.post(baseUrl, body, { headers });
  }


}
