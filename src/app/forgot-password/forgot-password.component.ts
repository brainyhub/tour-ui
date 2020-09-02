import { Component, OnInit } from '@angular/core';
import { ForgotPassword } from "./ForgotPassword";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import { ForgotPasswordService } from "./../service/forgot-password.service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPassword:ForgotPassword;
  forgotForm:FormGroup;
  loading = false;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router ,private forgotPasswordService : ForgotPasswordService) { }

  ngOnInit() {
    this.forgotPassword= new ForgotPassword();
    this.forgotForm=this.formBuilder.group({
      username: ["", [Validators.required, Validators.minLength(5)]],
      email:[],
      phone:[]

    });
  }
  get f() {
    return this.forgotForm.controls;
  }
  onFormSubmit() {
    this.submitted = true;
    console.log(this.forgotForm.value);
    console.log(this.forgotPassword);
    if((this.forgotForm.value.email == true || this.forgotForm.value.phone == true) && this.forgotForm.valid ){
      this.forgotPassword.username=this.forgotForm.value.username;
      this.forgotPassword.carrierType=(
               this.forgotForm.value.email==true && this.forgotForm.value.phone==true ?"3":(this.forgotForm.value.phone==true?"2":"1"));
      this.forgotPasswordService.forgotpassword(this.forgotPassword).subscribe(
        (response) => {
          console.log("success", response)
          this.router.navigate(['/changePassword']);
        },
        (error) => console.log("Error!", error)
      )
    }
    else{
      console.log(this.forgotForm.value);
      console.log(this.forgotPassword);
    
      alert("please chose a way to receive a OTP")
    }
    this.loading = true;
  }

}
