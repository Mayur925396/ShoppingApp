import { Component, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../Common/Service/register.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  @ViewChild(LoginComponent) childinstance:any;
  public customer:any;
  public isFrmSub:boolean=false;
  public sample:any=true;



  constructor(private fb:FormBuilder, private rg:RegisterService){
    this.customer=this.fb.group({

      fname:['',[Validators.required]],
      lname:['',[Validators.required]],
      email:['',[Validators.required, Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],
      mob:['',[Validators.required, Validators.pattern(/[0-9]{10}/)]],
      pass:['',[Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
      cpass:['',[Validators.required]]
    },{validators:this.passwordMatch})

  }
  onSubmit(){
    this.isFrmSub = true;
    if (this.customer.valid) {
      this.isFrmSub = false;
      this.rg.PosttoAPI(this.customer.value).subscribe({
        next:(res:any)=>{
      
        },
        error:(err:any)=>console.log(err)
      })
      this.customer.reset()
      this.onchange();
    }
    

    
  }

   

  passwordMatch(control:AbstractControl): null | any{
    var pass1=control.get('pass')?.value;
    var pass2=control.get('cpass')?.value;
    
    if(pass1!==pass2){
     control.get('cpass')?.setErrors({passwordMismatch:true})
    }
   }
get valid(){
  return this.customer.controls;
}

onchange(){
  this.sample=!this.sample;
}
flag(data:any){
  this.sample=data;
}
}
