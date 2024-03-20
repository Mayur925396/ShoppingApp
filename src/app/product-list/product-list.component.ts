import { Component } from '@angular/core';
import { APIService } from '../Common/Service/api.service';
import { MessageService } from 'primeng/api';
import { CouterService } from '../Common/Service/couter.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers:[MessageService]
})
export class ProductListComponent {
  public CardData: any=[];
  public Data: any=[];
  public first: number = 0;
  public rows: number = 2;

  public temp: any = 1;
  public BtnChange: any = true;
  public sample6: any;
  public wishlistedFlag: boolean = true;
  public mathcount: any = 1;
  public flag: any = true;
  public sample8:any=true;
  public Style1:any;
  public sampled:any;


  constructor(private Ap:APIService,private Count:CouterService){

  }
  ngOnInit(){
    this.catchData()
  }


  catchData(){
    this.Ap.getAPIData().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.CardData=res
        this.CardData=this.CardData.flat();
        this.Data=this.CardData.slice(0,8)

      },
      error:(err:any)=>console.log(err)
    })
  }





onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    this.loadData();
}
loadData(){
  this.Data=this.CardData.slice(this.first, this.first + this.rows)
}

addwish(data: any) {

}
addProduct(data: any) {
  this.count();
}
count() {
  this.Count.setCounter("0");
}

}
