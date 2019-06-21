import { Component, OnInit } from '@angular/core';
import {AddtheaterService} from "../services/addtheater.service";

@Component({
  selector: 'app-theaterdetails',
  templateUrl: './theaterdetails.component.html',
  styleUrls: ['./theaterdetails.component.css']
})
export class TheaterdetailsComponent implements OnInit {

  public theaterlist;
  constructor(private showtheater:AddtheaterService) {
    showtheater.gettheaterdetails().subscribe(theaters=>{
      this.theaterlist=theaters;
    });
  }

  ngOnInit() {
  }

}
