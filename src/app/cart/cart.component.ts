import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  public banner:any=["./../../assets/1710152342_Charmacy-Milano.jpg",'./../../assets/1710152458_Ajmal.jpg',"./../../assets/1710152519_Jaguar.jpg","./../../assets/1710152595_Guess.jpg"]
  public CartItemes: any = [];
  public EmptyCart: any = "../../../assets/emptycart.svg";
  public CartPrice:any=0;

addProduct(){}

}
