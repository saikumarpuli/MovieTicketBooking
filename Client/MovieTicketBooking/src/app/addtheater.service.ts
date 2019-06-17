import { Injectable } from '@angular/core';
import {QueryApi} from "./commonservice/Request/QueryApi";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AddtheaterService {

  constructor(private queryApi:QueryApi) { }

  posttheaterdetails(data):Observable<any>{
    return this.queryApi.doPost('THEATERDETAILS',data)
      .pipe(
        catchError(err => of([err]))
      );
  }

  gettheaterdetails():Observable<any>{
    let params;
    return this.queryApi.doGet('THEATERDETAILS',params)
      .pipe(
        catchError(err => of([err]))
      );
  }


}
