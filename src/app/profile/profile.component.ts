import { Component } from '@angular/core';
import { AuthService } from '../Common/Service/auth.service';
import { Router } from '@angular/router';
import { CouterService } from '../Common/Service/couter.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(private auth:AuthService,private route:Router,private bio:CouterService){

  }



  onLogout(){
    this.sendBio()
    this.auth.authset('false')
    this.route.navigate(['/signup']);
  }

  sendBio(){
   this.bio.setProfile("Sign In/ Sign Up")
  }
}
