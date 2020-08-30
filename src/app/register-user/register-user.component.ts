import { RegisterUser } from "./RegisterUser";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { RegisterUserService } from "./../service/register-user.service";

@Component({
  selector: "app-register-user",
  templateUrl: "./register-user.component.html",
  styleUrls: ["./register-user.component.css"],
})
export class RegisterUserComponent implements OnInit {
  registerUser: RegisterUser;
  username: string;
  password1: string;
  password2: string;
  email: string;
  passwordMismatch: Boolean = false;
  phone: number;
  newroles = new Object();
  roles = [];
  isDebugMode: Boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private registerUserService: RegisterUserService,
    private router: Router
  ) {}
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  ngOnInit() {
    this.registerUser = new RegisterUser();
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

  get f() {
    return this.registerForm.controls;
  }
  onFormSubmit() {
    this.submitted = true;
    if (!this.registerForm.invalid && !this.passwordMismatch) {
      this.registerUserService.registerNewUser(this.registerUser).subscribe(
        (response) => console.log("success", response),
        (error) => console.log("Error!", error)
      );
      this.loading = true;
    }
  }
}
