import { Component } from '@angular/core';
import { APIService } from '../Common/Service/api.service';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.css']
})
export class HomeBodyComponent {
  public banner6 = "./../../assets/Section1.jpg";
  public banner7 = "./../../assets/Section2.jpg"
  public banner: any = ["./../../assets/1710152342_Charmacy-Milano.jpg", './../../assets/1710152458_Ajmal.jpg', "./../../assets/1710152519_Jaguar.jpg", "./../../assets/1710152595_Guess.jpg"]
  public Data: any = [];
  public empty:any=[];



  constructor(private db: APIService) {

  }
  ngOnInit() {
    this.getData();

  }

  getData() {
    this.db.getAPIData().subscribe({
      next: (res: any) => {

        this.Data = res.flat().slice(17, 22);
        console.log(this.Data);

      },
      error: (err: any) => console.log(err)
    })
  }
  addwish(data: any) {

  }
  addProduct(data: any) {

  }

}
