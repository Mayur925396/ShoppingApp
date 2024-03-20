import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http:HttpClient) { }
  getAPIData(){
    const API1=this.http.get("http://localhost:3000/fragrances");
    const API2=this.http.get("http://localhost:3000/grooms");
   return forkJoin([API1,API2])
  }
}
