import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const baseUrl = 'https://affable-seat-326818.uc.r.appspot.com/';
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }
  getClientes(): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify({
      query: `query Query {
        getClientes {
          id
          phone
          first_name
          last_name
          address
          second_address
          services
          col
          post_cod
          email
          state
          city
          country
          codigoCliente
          form_1583
          notifications {
            email
            sms
          }
        }
      }
      `,
    })
    return this.http.post(baseUrl, body, { headers });
  }
  createCliente(data: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify({
      query: `mutation InsertCliente($input: ClienteInput) {
        insertCliente(input: $input)
      }
      `,
      variables:
      JSON.stringify(data),
    })
    return this.http.post(baseUrl, body, { headers });
  }
  eliminarCliente(data: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify({
      query: `mutation DeleteCliente($deleteClienteId: String) {
        deleteCliente(id: $deleteClienteId)
      }
      `,
      variables:
      JSON.stringify(data),
    })
    return this.http.post(baseUrl, body, { headers });
  }
  updateCliente(data: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    console.log('headers', headers);
    const body = JSON.stringify({
      query: `mutation UpdateCliente($input: ClienteInput, $updateClienteId: String) {
        updateCliente(input: $input, id: $updateClienteId)
      }
      `,
      variables:
        JSON.stringify(data),
    })
    return this.http.post(baseUrl, body, { headers });
  }
  getCliente(data: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify({
      query: `query GetCliente($getClienteId: String) {
        getCliente(id: $getClienteId) {
          id
          phone
          last_name
          first_name
          address
          second_address
          services
          col
          email
          post_cod
          state
          city
          country
          form_1583
          codigoCliente
          notifications {
            email
            sms
          }
        }
      }`,
      variables:
        JSON.stringify(data),
    })
    return this.http.post(baseUrl, body, { headers });
  }

}
