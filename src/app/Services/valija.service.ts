import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const baseUrl = 'https://affable-seat-326818.uc.r.appspot.com/';
@Injectable({
  providedIn: 'root'
})
export class ValijaService {

  constructor(private http: HttpClient) { }

  createValija(data: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    console.log('headers', headers);
    const body = JSON.stringify({
      query: `mutation InsertValija($input: ValijaInput) {
        insertValija(input: $input)
      }
      `,
      variables:
        JSON.stringify(data),
    })
    return this.http.post(baseUrl, body, { headers });
  }
  editar(data: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    console.log('headers', headers);
    const body = JSON.stringify({
      query: `mutation UpdateValija($input: ValijaInput, $updateValijaId: String) {
        updateValija(input: $input, id: $updateValijaId)
      }
      `,
      variables:
        JSON.stringify(data),
    })
    return this.http.post(baseUrl, body, { headers });
  }
  getValijas(): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify({
      query: `query GetValijas {
        getValijas {
          id
          contenido
          tiendaDestino
          tipoValija
          paquetes
          numeroGuia
        }
      }
      `,
    })
    return this.http.post(baseUrl, body, { headers });
  }
  getValija(data: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify({
      query: `
      query GetValija($getValijaId: String) {
        getValija(id: $getValijaId) {
          id
          contenido
          tiendaDestino
          tipoValija
          paquetes
          numeroGuia
        }
      }
      `,
      variables:
        JSON.stringify(data),
    })
    return this.http.post(baseUrl, body, { headers });
  }
  eliminarValija(data: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify({
      query: `mutation DeleteValija($deleteValijaId: String) {
        deleteValija(id: $deleteValijaId)
      }
      `,
      variables:
      JSON.stringify(data),
    })
    return this.http.post(baseUrl, body, { headers });
  }
}
