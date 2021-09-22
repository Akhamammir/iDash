import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, Subscription } from 'rxjs';
const baseUrl = 'https://affable-seat-326818.uc.r.appspot.com/';
const Get_Users = gql`
 query getClienteEboxs {
          getClienteEboxs {
            id
            phone
            first_name
            last_name
            }
         }`;

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  private querySubscription: Subscription | undefined;

  create(data: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify({
      query: `mutation InsertClienteEboxMutation($insertClienteEboxInput: ClienteEboxInput) {
        insertClienteEbox(input: $insertClienteEboxInput) {
          id
        }
      }
      `,
      variables:
        JSON.stringify(data),
    })
    return this.http.post(baseUrl, body, { headers });
  }
  getUsers() {
    return this.querySubscription = this.apollo.watchQuery<any>({
      query: Get_Users
    }).valueChanges
      .subscribe(data => data);
  }
  constructor(private apollo: Apollo, private http: HttpClient) { }
}
