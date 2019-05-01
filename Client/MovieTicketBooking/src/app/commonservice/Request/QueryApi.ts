import { Injectable } from '@angular/core';
import {UserEndPoint} from './../../commonservice/Request/UserEndPoint';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QueryApi {
  constructor(private http: HttpClient) {

  }
  doGet(url: any, params: any) {
    url = UserEndPoint(url, params);
    return this.http.get(url, params);
  }

  doPost(url: any, params: any) {
    url = UserEndPoint(url, params);
    return this.http.post(url, params );
  }

}


