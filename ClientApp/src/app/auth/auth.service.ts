import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from "./../classes/user";

@Injectable()
export class AuthService {
  private accountUrl = 'api/account/';
  private loginUrl = this.accountUrl + 'login';
  private registerUrl = this.accountUrl + 'register';

  constructor(private router: Router, 
              public jwtHelper: JwtHelperService, 
              private http: HttpClient) { }

  get isLoggedIn() {
    const token = localStorage.getItem('access_token');
    // Check whether the token is expired and return
    // true or false
    var res = token && !this.jwtHelper.isTokenExpired(token);
    return res;
  }

  resolve(): void {
    if (this.isLoggedIn) {
      this.router.navigate(['']);
    }
  }

  login(loginUser: User): Observable<string> {
    return this.http.post<string>(this.loginUrl, loginUser);
  }

  logout(): void {
    localStorage.removeItem('access_token');
    this.router.navigate(['login']);
  }

  register(registerUser: User){
    return this.http.post<string>(this.registerUrl, registerUser);
  }
}
