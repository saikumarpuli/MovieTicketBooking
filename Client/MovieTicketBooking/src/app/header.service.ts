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
    this.loginsource.next(flag);
  }

}
