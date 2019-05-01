 import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {QueryApi} from "./commonservice/Request/QueryApi";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http: HttpClient, private queryApi:QueryApi) { }
  PostStudentDetails(params):Observable<any>{
    console.log("object in service-----",params)
    return this.queryApi.doPost('REGISTRATION',params)
      .pipe(
        catchError(err => of([err]))
      );
  }}
