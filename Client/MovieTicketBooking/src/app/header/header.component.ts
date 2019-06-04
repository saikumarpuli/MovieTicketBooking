import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private localStorage:LocalStorage) {}
  data:any=0;
   flag1: boolean=true;
   flag2: boolean=false;

  ngOnInit() {
      this.localStorage.getItem<any>('data').subscribe((user) => {
      this.data=user;
      if(this.data==1){
        this.flag1=false;
        this.flag2=true;
      }
    });
  }

  logout() {
    this.localStorage.removeItem('data').subscribe(() => {});
    this.flag2=false;
    this.flag1=true;
    }
}
