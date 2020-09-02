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
    private forgotPasswordService: ForgotPasswordService
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
      //comment the navigate path(line no:38) and uncomment the comment path(line39-line45)
      //this.router.navigate(['/changePassword',this.forgotPassword.userName]);
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
        (error) => console.log("Error!", error)
      );
    } else {
      console.log(this.forgotForm.value);
      console.log(this.forgotPassword);

      alert("please chose a way to receive a OTP");
    }
    console.log(this.forgotForm.value);
    console.log(this.forgotPassword);

    this.loading = true;
  }
}
