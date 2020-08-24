import { AdminService } from './../service/admin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from '../domain/loginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginRequest:LoginRequest;
  constructor(private adminService:AdminService,private router:Router) { 

  }

  ngOnInit() {
    this.loginRequest={
      "password": "admin",
      "username": "admin"
    };
  }
  login(){
    this.adminService.validateUser(this.loginRequest).subscribe(response => 
      {
        console.log("authenticateUser");
        console.log(response);
        if(response!=undefined){
          this.adminService.setUpUserData(response);
          this.router.navigate(['dashboard']);
        }else{
          this.router.navigate(['']);
        }
      });
  }
}
