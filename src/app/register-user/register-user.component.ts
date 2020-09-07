import { RegisterUser } from "./RegisterUser";
import { CheckUser } from "./CheckUser";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { RegisterUserService } from "./../service/register-user.service";
import { NotifyService } from "./../service/notify.service";

@Component({
  selector: "app-register-user",
  templateUrl: "./register-user.component.html",
  styleUrls: ["./register-user.component.css"],
})
export class RegisterUserComponent implements OnInit {
  registerUser: RegisterUser;
  checkUser:CheckUser;
  username: string;
  password1: string;
  password2: string;
  email: string;
  passwordMismatch: Boolean = false;
  checkusername: Boolean = false;
  checkemail: Boolean = false;
  phone: number;
  newroles = new Object();
  roles = [];
  isDebugMode: Boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private registerUserService: RegisterUserService,
    private router: Router,
    private notifyService: NotifyService
  ) {}
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  ngOnInit() {
    this.registerUser = new RegisterUser();
    this.checkUser = new CheckUser();
    this.registerForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password1: ["", [Validators.required, Validators.minLength(5)]],
      password2: ["", [Validators.required, Validators.minLength(5)]],
      phone: ["", Validators.required],
      username: ["", [Validators.required, Validators.minLength(5)]],
      roles: [],
    });
  }
  passwordCheck() {
    if (this.registerUser.password != this.registerForm.value.password2) {
      this.passwordMismatch = true;
      this.registerForm.controls["password2"].setErrors({ incorrect: true });
    } else {
      this.passwordMismatch = false;
      this.registerForm.controls["password2"].setErrors(null);
    }
  }
  checkUserName(){
      this.checkUser.userName=this.registerForm.value.username;
      this.checkUser.email=null;
      console.log(this.checkUser);
      this.registerUserService.checkNewUser(this.checkUser).subscribe(
        (response) => {
          if(response.success)
          {
            this.checkusername = true;
            this.registerForm.controls["username"].setErrors({ incorrect: true });
          }
          else{
            this.checkusername = false;
            this.registerForm.controls["username"].setErrors(null);
          }
        }
    )
  }
  checkEmail(){
    this.checkUser.email=this.registerForm.value.email;
    this.checkUser.userName=null;
    this.registerUserService.checkNewUser(this.checkUser).subscribe(
      (response) => {
        if(response.success)
        {
          this.checkemail=true;
          this.registerForm.controls["email"].setErrors({ incorrect: true });
          
        }
        else{
          this.checkemail= false;
          this.registerForm.controls["email"].setErrors(null);
        }
      }
  )
}

  get f() {
    return this.registerForm.controls;
  }
  onFormSubmit() {
    this.submitted = true;
    if (!this.registerForm.invalid ) {
      this.registerUserService.registerNewUser(this.registerUser).subscribe(
        (response) => {
          console.log("success", response)
          alert("Successfully Register Please login ");
          this.router.navigate(['/login']);
        },
        (error) => console.log("Error!", error)
      );
      this.loading = true;
    }
  }
}
