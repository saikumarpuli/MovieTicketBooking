import { Component, OnInit } from '@angular/core';
import {SeatdataService} from "../services/seatdata.service";

@Component({
  selector: 'app-select-seats',
  templateUrl: './select-seats.component.html',
  styleUrls: ['./select-seats.component.css']
})
export class SelectSeatsComponent implements OnInit {

  constructor(private seatsservice:SeatdataService) { }

  ngOnInit() {
  }
  seats =this.seatsservice;
  get(seat: { s: number }) {
    console.log(seat.s);
  }
}

