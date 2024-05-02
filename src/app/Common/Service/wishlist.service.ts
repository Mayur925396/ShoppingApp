import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  public domain:any=localStorage.getItem('wishlist');
  public wishlist: any[] = [...JSON.parse(this.domain)];
  private wish: any = new BehaviorSubject(JSON.parse(this.domain));
  public List: any = this.wish.asObservable();



  constructor() {

   }
 

  setData(product: any) {
  
     var index= this.wishlist.findIndex((x:any)=>x.id==product.id)
       if (index!==-1) {
         this.wishlist.splice(index, 1);
         localStorage.setItem('wishlist',JSON.stringify(this.wishlist));       
         
       }else{
         this.wishlist.push(product);
        localStorage.setItem('wishlist',JSON.stringify(this.wishlist));
       }
     this.wish.next([...this.wishlist]);
   }
}
