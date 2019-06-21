import { Component, OnInit } from '@angular/core';
import {RegisterService} from "../services/register.service";

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  p: number = 1;
  public userdetails;
  constructor(private users:RegisterService){
    users.getCourseDetails().subscribe(users=>{
      this.userdetails=users;
      console.log(users);
    });
  }

  ngOnInit() {
  }

}
