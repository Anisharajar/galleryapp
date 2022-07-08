import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http:HttpClient) { }
viewgallary=()=>
{
  return this.http.get("https://http://jsonplaceholder.typicode.com/photos")
}
}
