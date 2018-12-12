import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from './loginscreen/user';

const httpOptions = {
    headers: new 
    HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class LoginScreenService{

    constructor(private http: HttpClient){}
    

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>('http://localhost:3001/login', {
      email: email,
      password: password
    }, httpOptions);
  }
}