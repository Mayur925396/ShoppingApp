import { Component } from '@angular/core';
import { WishlistService } from '../Common/Service/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {

  public domData: any = [];
  public wishlist:any='./../../assets/images.png'
  public banner:any=['./../../assets/1710152458_Ajmal.jpg',"./../../assets/1710152519_Jaguar.jpg","./../../assets/1710152342_Charmacy-Milano.jpg","./../../assets/1710152595_Guess.jpg"]

  constructor(private wish:WishlistService){

  }

  ngOnInit(){
    this.catchData();
    if(this.domData.length==0){
      this.domData=null;
   }

   
  }
  removeProduct(data:any){
   var index=this.domData.findIndex((x:any)=>x.id==data.id);
   this.domData.splice(index,1);
   this.wish.wishlist.splice(index,1);
   localStorage.setItem('wishlist',JSON.stringify(this.domData));
   
   if(this.domData.length==0){
    this.domData=null
 }
  }
  
  AddtoCart(data:any){

  }

  catchData(){
    this.wish.List.subscribe({
      next:(res:any)=>{
        console.log(res);
        this.domData=res;
        
      },
      error:(err:any)=>console.log(err)
    })
  }
}
