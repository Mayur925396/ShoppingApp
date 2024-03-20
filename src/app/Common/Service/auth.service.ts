import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private flag: any = new BehaviorSubject(false);
  public auth: any = this.flag.asObservable()
  constructor() { }
   authset(data: any) {
    this.flag.next(data);
  }
}
