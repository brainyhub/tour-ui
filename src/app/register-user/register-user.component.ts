import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';
import { RegisterUserService } from './../service/register-user.service';
import { RegisterUserType } from './registerUserType';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit{
  registerUser:RegisterUserType
  username: string;
  password1: string;
  password2: string;
  email: string;
  phone:number;
  newroles = new Object();
  roles=[];

  constructor( private formBuilder: FormBuilder,private registerUserService  : RegisterUserService,private router: Router) { }
    registerForm: FormGroup;
    loading = false;
    submitted = false;

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
    email: ['', [Validators.required,Validators.email]],
    password1: ['', [Validators.required, Validators.minLength(5)]],
    password2: ['', [Validators.required, Validators.minLength(5)]],
    phone: ['', Validators.required],
    username:['', [Validators.required, Validators.minLength(5)]],
    roles:[]
      });
    }
    
  get f() { return this.registerForm.controls; }
  onFormSubmit(){
    this.submitted = true;
      // return for here if form is invalid
      if (this.registerForm.invalid) {
        return;
      }
      if(this.registerForm.value.password1!=this.registerForm.value.password2){
        alert("password and confirm password not match");
        return;
      }
      this.registerUserService.registerNewUser(this.registerForm.value).subscribe(
            response =>console.log("success",response),
            error=> console.log('Error!',error)
              )
      this.loading = true;
  }

}
