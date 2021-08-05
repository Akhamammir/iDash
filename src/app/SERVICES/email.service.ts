import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:8080/api/email';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
}
