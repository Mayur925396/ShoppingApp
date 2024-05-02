import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public flag: any = new BehaviorSubject <boolean>(false);
  // public : any = this.flag.asObservable()
  constructor() { }
   authset(data: any) {
    this.flag.next(data);
  }
}
