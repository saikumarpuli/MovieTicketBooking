import { Injectable } from '@angular/core';
 // @ts-ignore
import seats from "../../assets/seats.json";
@Injectable({
  providedIn: 'root'
})
export class SeatdataService {
  constructor() {
    return seats;
  }

}
