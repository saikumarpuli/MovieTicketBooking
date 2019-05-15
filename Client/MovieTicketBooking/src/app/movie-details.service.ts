import { Injectable } from '@angular/core';
 import {QueryApi} from "./commonservice/Request/QueryApi";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";
 @Injectable({
  providedIn: 'root'
})
export class MovieDetailsService {
   constructor(private queryApi:QueryApi) { }

   postmoviedetails(data):Observable<any>{

      return this.queryApi.doPost('MOVIEDETAILS',data)
       .pipe(
         catchError(err => of([err]))
       );
   }
 }
