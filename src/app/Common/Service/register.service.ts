import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  PosttoAPI(data:any){
    return this.http.post("http://localhost:3000/users",data)
  };

  CatchApi(user:any){
    console.log(user.username)
    return this.http.get(`http://localhost:3000/users?mob=${user.username}&pass=${user.pass}`)
  }
}
