import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:5094/api/auth/login'; 
  private jwtHelper = new JwtHelperService();

  constructor(private http:HttpClient, private router:Router) { }

  login(Credential :any){
    return this.http.post<any>(this.loginUrl, Credential);
  }

  logout(){
    localStorage.removeItem('token'); 
    this.router.navigate(['/login']);
  }
  isLoggedIn() {
    const token = localStorage.getItem('token');
    return token && !this.jwtHelper.isTokenExpired(token);
  }
}
