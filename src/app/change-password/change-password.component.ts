import { Observable } from "rxjs";
import { NotifyService } from "./../service/notify.service";
import { Component, OnInit } from "@angular/core";
import { ChangePassword } from "./ChangePassword";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ChangePasswordService } from "../service/change-password.service";

@Component({
  selector: "app-change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.css"],
})
export class ChangePasswordComponent implements OnInit {
  changePassword: ChangePassword;
  changeForm: FormGroup;
  loading = false;
  submitted = false;
  passwordMismatch: Boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private changePasswordService: ChangePasswordService,
    private activatedroute: ActivatedRoute,
    private notifyService: NotifyService
  ) {}

  ngOnInit() {
    this.changePassword = new ChangePassword();
    this.activatedroute.queryParams.subscribe((params) => {
      this.changePassword.userName = params["useName"];
    });
    this.changeForm = this.formBuilder.group({
      otp: ["", [Validators.required, Validators.minLength(1)]],
      password1: ["", [Validators.required, Validators.minLength(5)]],
      password2: ["", [Validators.required, Validators.minLength(5)]],
    });
  }
  passwordCheck() {
    if (this.changePassword.userPassword != this.changeForm.value.password2) {
      this.passwordMismatch = true;
      this.notifyService.warningMsg("Confirm Password should be same as Password","Mismatch!!");
      this.changeForm.controls["password2"].setErrors({ incorrect: true });
    } else {
      this.passwordMismatch = false;
      this.changeForm.controls["password2"].setErrors(null);
    }
  }
  get f() {
    return this.changeForm.controls;
  }
  onFormSubmit() {
    this.submitted = true;
    if (this.changeForm.valid) {
      this.changePasswordService.changepassword(this.changePassword).subscribe(
        (response) => {
          console.log("success", response);
          if(response.success){
            this.notifyService.successMsg("Now login","Successfully change passwors");
          }
          else{
            this.notifyService.errorMsg("login or Forgot Password again","OTP is not match");
          }
          this.router.navigate(["/login"]);
        },
        (error) => console.log("Error!", error)
      );
    }
    this.loading = true;
  }
}
