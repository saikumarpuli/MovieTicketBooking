import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private loginsource=new Subject<any>();
  loginMessage=this.loginsource.asObservable();
  constructor() { }

  sendfalg(flag: number){
    console.log(flag);
    this.loginsource.next(flag);
    console.log(this.loginsource.next(flag));
  }

}
