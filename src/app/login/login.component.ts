import { NotifyService } from "./../service/notify.service";
import { AdminService } from "./../service/admin.service";
import { FormBuilder, AbstractControl } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginRequest } from "../domain/loginRequest";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CookieService } from "ngx-cookie-service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  username: FormControl;
  password: FormControl;
  loginRequest: LoginRequest;
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private adminService: AdminService,
    private router: Router,
    private formBuilder: FormBuilder,
    private cookies: CookieService,
    private notifyService: NotifyService
  ) {}

  ngOnInit() {
    this.notifyService.success("Password Change successful", "Congrats..");
    this.loginForm = this.formBuilder.group({
      username: ["", [Validators.required, Validators.minLength(5)]],
      password: ["", [Validators.required, Validators.minLength(5)]],
      rememberMe: [""],
    });

    this.loginRequest = {
      password:
        this.cookies.get("username") != null
          ? this.cookies.get("username")
          : "admin",
      username:
        this.cookies.get("password") != null
          ? this.cookies.get("password")
          : "admin",
    };
  }
  get f() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.adminService
        .validateUser(this.loginRequest)
        .subscribe((response) => {
          console.log("authenticateUser");
          console.log(response);
          if (response != undefined) {
            this.adminService.setUpUserData(response);
            if (this.loginForm.value.rememberMe) {
              this.cookies.set("username", this.loginForm.value.username);
              this.cookies.set("password", this.loginForm.value.password);
            }
            this.router.navigate(["/site"]);
          } else {
            this.router.navigate([""]);
          }
        });
    }
  }
}
