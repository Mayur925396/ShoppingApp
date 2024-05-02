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
    let apiUrl = `http://localhost:3000/users?pass=${user.pass}`;
    let temp=user.username.includes('@')
    if (temp) {
      apiUrl += `&email=${user.username}`;
    } else{
      apiUrl += `&mob=${user.username}`;
    }
console.log(temp);
console.log(apiUrl)
    return this.http.get(apiUrl);
  }
}
