import { AdminService } from './../service/admin.service';
import { FormBuilder, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from '../domain/loginRequest';
import {  FormGroup, FormControl,Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: FormControl;
  password: FormControl;
  loginRequest:LoginRequest;
  loginForm: FormGroup;
  submitted = false;
  constructor(private adminService:AdminService,private router:Router,private formBuilder: FormBuilder) { 

  }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
        username: ['', [Validators.required,Validators.minLength(5)]],
        password: ['', [Validators.required,Validators.minLength(5)]]
    });
   
    this.loginRequest={
      "password": "admin",
      "username": "admin"
    };
  }
  get f() { return this.loginForm.controls; }
  
  onSubmit(){
    this.submitted = true;
    if (this.loginForm.valid) {
      this.adminService.validateUser(this.loginRequest).subscribe(response => 
        {
         
          console.log("authenticateUser");
          console.log(response);
          if(response!=undefined){
            this.adminService.setUpUserData(response);
            this.router.navigate(['/site']);
          }else{
            this.router.navigate(['']);
          }
        });
    }
  }
}