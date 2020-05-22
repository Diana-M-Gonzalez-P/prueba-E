import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlPublic = 'https://d2rpzhocglww2h.cloudfront.net';
  private urlData = this.urlPublic + '/test/test.json';
  constructor(private http: HttpClient) { }

  getData() {
    const headers = new HttpHeaders({
    });
    return this.http.get(this.urlData, { headers });
  }
}
