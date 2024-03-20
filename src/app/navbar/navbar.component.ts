import { Component } from '@angular/core';
import { CouterService } from '../Common/Service/couter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public announcement:boolean=true;
  public MathCounter:any=-1;
  public profileData:any="Sign In/ Sign Up";
  constructor(private Count:CouterService, private route:Router){

  }
  
  ngOnInit(){
    this.IncreseCount();
    this.catchBio();
    
  }

  IncreseCount(){
    this.Count.counter.subscribe({
      next:(res:any)=>{
        console.log(res);
      if(res=="0")
        this.MathCounter++;
      else{
        this.MathCounter--
      }
        
        
      },
      error:(err:any)=>console.log(err)
    })
  }




  onannouncement(){
    this.announcement=false;
  }
  onAuth(){
    var auth=sessionStorage.getItem('guard');
    if(auth=='false'){
      this.route.navigate(['/signup'])
    
   }else{
    this.route.navigate(['/profile'])
   }
  }


  catchBio(){
    this.Count.userBio.subscribe({
      next:(res:any)=>{
        this.profileData=res;
      },
      error:(err:any)=>console.log(err)
    })
  }
}
