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
  public empty:any=[];


  constructor(private Count:CouterService, private route:Router){
  var temp=localStorage.getItem('wishlist')
    if(!temp){
    localStorage.setItem('wishlist',JSON.stringify(this.empty))
   } 
 

  }
  
  ngOnInit(){
    this.IncreseCount();
    this.catchBio();
    if(localStorage.getItem('m2')==null){
      this.profileData='Sign In/ Sign Up'
    }else{
      this.profileData=localStorage.getItem('m2');
    }
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
    var auth=localStorage.getItem('m1');
    console.log(auth);
    if(auth==null){
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
