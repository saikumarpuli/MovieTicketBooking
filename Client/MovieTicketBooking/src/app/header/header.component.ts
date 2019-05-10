import { Component, OnInit } from '@angular/core';
import {HeaderService} from "../header.service";
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service:HeaderService,private localStorage:LocalStorage) { }
     data:any;
  ngOnInit() {
    /*this.localStorage.getItem<any>('data').subscribe((user) => {
       this.data=user;
       console.log("this is header"+this.data);
    });*/

    this.service.loginMessage.subscribe(
      flag=>{
        this.data=flag;
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$"+this.data);
      }
    )
  }


}
