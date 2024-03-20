import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './Service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  public value:any=false;
  constructor(private db:AuthService){
    this.Activation();
  }

    

  Activation(){
    this.db.auth.subscribe({
      next:(res:any)=>{
        this.value=res;
        
       sessionStorage.setItem('guard',res);
     

      },
      error:(err:any)=>console.log(err)
    })
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any | UrlTree> | Promise<any | UrlTree> | any | UrlTree {
    return this.value;
  }
  
}
