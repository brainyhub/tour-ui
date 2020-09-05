import { NotifyService } from "./../service/notify.service";
import { Component, OnInit } from "@angular/core";
import { ForgotPassword } from "./ForgotPassword";
import { Router, NavigationExtras } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { ForgotPasswordService } from "./../service/forgot-password.service";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.css"],
})
export class ForgotPasswordComponent implements OnInit {
  forgotPassword: ForgotPassword;
  forgotForm: FormGroup;
  loading = false;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private forgotPasswordService: ForgotPasswordService,
    private notifyService: NotifyService
  ) {}

  ngOnInit() {
    this.forgotPassword = new ForgotPassword();
    this.forgotForm = this.formBuilder.group({
      userName: ["", [Validators.required, Validators.minLength(5)]],
      email: [],
      phone: [],
    });
  }
  get f() {
    return this.forgotForm.controls;
  }
  onFormSubmit() {
    this.submitted = true;
    if (
      (this.forgotForm.value.email == true ||
        this.forgotForm.value.phone == true) &&
      this.forgotForm.valid
    ) {
      this.forgotPassword.userName = this.forgotForm.value.userName;
      this.forgotPassword.carrierType =
        this.forgotForm.value.email == true &&
        this.forgotForm.value.phone == true
          ? "3"
          : this.forgotForm.value.phone == true
          ? "2"
          : "1";
      this.forgotPasswordService.forgotpassword(this.forgotPassword).subscribe(
        (response) => {
          let navigationExtras: NavigationExtras = {
            queryParams: {
              useName: this.forgotPassword.userName,
            },
          };

          console.log("success", response);
          this.router.navigate(["/changePassword"], navigationExtras);
        },
        (error) => {
          this.notifyService.errorMsg("Username or Email is Invalid.","Error !!");
          this.loading = true;
        }
      );
    } else {
      this.notifyService.warningMsg("Please chose a way to receive a OTP.","Warning!!");
    }
    this.loading = true;
  }
}
