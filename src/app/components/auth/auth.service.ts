import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public jwtHelper: JwtHelper) { }

  public isAuthenticated(): boolean {

    debugger;
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }
}
