import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../Common/Service/register.service';
import { AuthService } from '../Common/Service/auth.service';
import { Router } from '@angular/router';
import { CouterService } from '../Common/Service/couter.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() sendParent:any= new EventEmitter()
  public user:any;
  public FrmSub:boolean=false;
  public userbio:any="Profile";


  constructor(private fb:FormBuilder, private rg:RegisterService, private auth:AuthService,private route:Router, private bio:CouterService){
    this.user=this.fb.group({
      username:['',[Validators.required]],
      pass:['',[Validators.required]]
    })

  }
  


  onLogin(){
    this.FrmSub = true;
    console.log(this.user.value)

    if (this.user.valid) {
      // console.log(this.user.value);
     
      this.rg.CatchApi(this.user.value).subscribe({
        next:(res:any)=>{
          if(res.length==0){
            alert("Invalid Username or Password \n Please Enter Your Valid Details")
          }
         console.log(res);
         this.userbio=res[0].fname+ " " +res[0].lname;
         console.log(this.userbio);
         this.auth.authset('true');

         this.sendbio();
         
         this.route.navigate(['/profile']);
        },
        error:(err:any)=>{
          console.log(err);
        }

      })
      
      this.FrmSub = false;
      this.user.reset()
    }

   
  }


  get f(){
    return this.user.controls;
  }
  sendbio(){
    this.bio.setProfile(this.userbio);
  }

  onsignup(){
  this.sendParent.emit(true)
  }
}
