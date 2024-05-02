import { Component } from '@angular/core';
import { APIService } from '../Common/Service/api.service';
import { MessageService } from 'primeng/api';
import { CouterService } from '../Common/Service/couter.service';
import { WishlistService } from '../Common/Service/wishlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [MessageService]
})
export class ProductListComponent {
  public CardData: any = [];
  public Data: any = [];
  public first: number = 0;
  public rows: number = 2;
  public temp: any = 1;
  public BtnChange: any = true;
  public sample6: any;
  public wishlistedFlag: boolean = true;
  public mathcount: any = 1;
  public flag: any = true;
  public sample8: any = true;
  public Style1: any;
  public sampled: any;
  public wishlistedIcon:any;
 

  constructor(private Ap: APIService, private Count: CouterService, private wish: WishlistService) {

  }
  ngOnInit() {
    this.catchData();
   
  }

  catchData() {
    this.Ap.getAPIData().subscribe({
      next: (res: any) => {
        this.CardData = res.flat();
        this.Data = this.CardData.slice(0, 8);
     
          this.listinitiated(); 

      },
      error: (err: any) => console.log(err)
    })
  }

  listinitiated() {
    this.wish.List.subscribe(({
      next:(res:any)=>{
        if(res){
          this.wishlistedIcon=res;   
        }
            
      },
      error:(err:any)=>console.log(err)
    }))
    this.CardData.forEach((x: any) => {
      this.wishlistedIcon.forEach((y: any) => {
        if (x.id == y.id) {
          Object.assign(x, y)
        }
      })
    })
  }


  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    this.loadData();
  }
  loadData() {
    this.Data = this.CardData.slice(this.first, this.first + this.rows)
  }

  toggleWishlist(data: any) {
    data.flags = !data.flags;
    this.wish.setData(data);
  }

  addProduct(data: any) {
    this.count();
  }
  count() {
    this.Count.setCounter("0");
  }

}
