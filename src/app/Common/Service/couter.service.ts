import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CouterService {
  private count:any= new BehaviorSubject('0');
  public counter=this.count.asObservable();


  private profile:any=new BehaviorSubject("Sign In/ Sign Up");
  public userBio:any=this.profile.asObservable();
  constructor() { }

  setCounter(measure:any){
    this.count.next(measure)
    }

  setProfile(bio:any){
    this.profile.next(bio);
  }
}
