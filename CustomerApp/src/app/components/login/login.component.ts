import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {FormsModule}  from '@angular/forms'

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials = {username:'', password:''}

  constructor(private auth : AuthService, private router:Router){}

  login(){
       this.auth.login(this.credentials).subscribe((response)=>{
          localStorage.setItem('token',response.token);
          this.router.navigate(['/home']);
       });
  }



}
