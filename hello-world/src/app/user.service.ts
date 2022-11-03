import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  userRegister(data: any){
    const url = 'http://172.16.107.82:8080/';
    return this.http.post(url, data);
  }

  userLogin(data: any){
    const url = 'http://172.16.107.82:8080/login';
    return this.http.post(url, data);
  }
}
